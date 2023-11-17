package br.com.digitalhouse.hotelbackend.domain.service.impl;

import br.com.digitalhouse.hotelbackend.domain.entity.Product;
import br.com.digitalhouse.hotelbackend.domain.exception.ProductNotFound;
import br.com.digitalhouse.hotelbackend.domain.repository.ProductRepository;
import br.com.digitalhouse.hotelbackend.domain.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.Map;
@Slf4j
@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
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
}
