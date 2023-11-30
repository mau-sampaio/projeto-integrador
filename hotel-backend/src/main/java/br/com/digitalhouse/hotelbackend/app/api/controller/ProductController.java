package br.com.digitalhouse.hotelbackend.app.api.controller;

import br.com.digitalhouse.hotelbackend.app.api.ProductApi;
import br.com.digitalhouse.hotelbackend.app.api.dto.request.ProductRequest;
import br.com.digitalhouse.hotelbackend.app.api.dto.response.ProductDetaileResponse;
import br.com.digitalhouse.hotelbackend.domain.entity.Feature;
import br.com.digitalhouse.hotelbackend.domain.entity.Image;
import br.com.digitalhouse.hotelbackend.domain.entity.Product;
import br.com.digitalhouse.hotelbackend.domain.exception.ResourceNotFoundException;
import br.com.digitalhouse.hotelbackend.domain.service.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ProductController implements ProductApi {

    private final ProductService productService;

    private final ObjectMapper objectMapper;
    @Autowired
    public ProductController(ProductService productService, ObjectMapper objectMapper) {
        this.productService = productService;
        this.objectMapper = objectMapper;
    }

    @Override
    public ResponseEntity<ProductDetaileResponse> create(ProductRequest request) {
        Product product = objectMapper.convertValue(request, Product.class);
        Product productCreate = productService.create(product);
        ProductDetaileResponse productDetaileResponse =  productDetaileResponse(productCreate);
        return ResponseEntity.status(HttpStatus.CREATED).body(productDetaileResponse);
    }

    @Override
    public ResponseEntity<Page<ProductDetaileResponse>> findByAll(Pageable pageable) {
        Page<Product> productPageable = productService.findByAll(pageable);
        Page<ProductDetaileResponse> response = productPageable
                .map(product -> new ProductDetaileResponse(product.getId(),
                        product.getNome(),
                        product.getDescription(),
                        product.getFeatures(),
                        (List<Image>) product.getImagens()
                ));
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<ProductDetaileResponse> update(Long id, Map<String, Object> campos) {
        Product product = productService.update(id, campos);
        ProductDetaileResponse productDetaileResponse =  productDetaileResponse(product);
        return ResponseEntity.ok().body(productDetaileResponse);
    }

    @Override
    public ResponseEntity<Void> delete(Long id) {
        productService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @Override
    public ResponseEntity<List<Product>> findByCategory(Long CategoryId) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.findByCategory(CategoryId));
    }

    @Override
    public ResponseEntity<List<Product>> findByCity(Long CityId) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.findByCity(CityId));
    }

    private ProductDetaileResponse productDetaileResponse(Product product) {
        return objectMapper.convertValue(product, ProductDetaileResponse.class);
    }
}
