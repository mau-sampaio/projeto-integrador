package br.com.digitalhouse.hotelbackend.domain.service;

import br.com.digitalhouse.hotelbackend.domain.entity.Product;
import br.com.digitalhouse.hotelbackend.domain.exception.ResourceNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface ProductService {

    Product create(Product product);
    Product findById(Long id);
    Page<Product> findByAll(Pageable pageable);
    Product update(Long id, Map<String, Object> campos);
    void delete (Long id);
    List<Product> findByCategory(Long categoryId) throws ResourceNotFoundException;
    List<Product> findByCity(Long cityId) throws ResourceNotFoundException;

}
