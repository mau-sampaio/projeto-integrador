package br.com.digitalhouse.hotelbackend.domain.service.impl;

import br.com.digitalhouse.hotelbackend.domain.entity.Category;
import br.com.digitalhouse.hotelbackend.domain.entity.City;
import br.com.digitalhouse.hotelbackend.domain.entity.Product;
import br.com.digitalhouse.hotelbackend.domain.exception.ProductNotFound;
import br.com.digitalhouse.hotelbackend.domain.exception.ResourceNotFoundException;
import br.com.digitalhouse.hotelbackend.domain.repository.CategoryRepository;
import br.com.digitalhouse.hotelbackend.domain.repository.CityRepository;
import br.com.digitalhouse.hotelbackend.domain.repository.ProductRepository;
import br.com.digitalhouse.hotelbackend.domain.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
@Slf4j
@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final CityRepository cityRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository, CategoryRepository categoryRepository, CityRepository cityRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.cityRepository = cityRepository;
    }

    @Override
    public Product create(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product findById(Long id) {
        return productRepository.findById(id).orElseThrow(()-> new ProductNotFound(id));
    }

    @Override
    public Page<Product> findByAll(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public Product update(Long id, Map<String, Object> campos) {
        Product product =productRepository.findById(id).orElseThrow();

        for (Field field : Product.class.getDeclaredFields()) {
            String fieldName = field.getName();
            if (campos.containsKey(fieldName)) {
                try {
                    field.setAccessible(true);
                    Object newValue = campos.get(fieldName);
                    field.set(product, newValue);
                } catch (IllegalAccessException e) {
                    log.error("Erro so definir valor do campo: " + fieldName, e);
                }
            }
        }
        return productRepository.save(product);
    }

    @Override
    public void delete(Long id) {
        Product product = productRepository.findById(id).orElseThrow();
        productRepository.delete(product);

    }
    @Override
    public List<Product> findByCategory(Long categoryId) throws ResourceNotFoundException {
        Category categoriaModel = categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        return productRepository.findByCategory(categoriaModel);
    }
    @Override
    public List<Product> findByCity(Long CityId) throws ResourceNotFoundException {
        City cidadesModel = cityRepository.findById(CityId).orElseThrow(() -> new ResourceNotFoundException("City not found"));
        return productRepository.findByCity(cidadesModel);
    }
}
