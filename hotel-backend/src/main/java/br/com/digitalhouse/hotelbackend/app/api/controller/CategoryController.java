package br.com.digitalhouse.hotelbackend.app.api.controller;


import br.com.digitalhouse.hotelbackend.app.api.CategoryApi;
import br.com.digitalhouse.hotelbackend.app.api.dto.request.CategoryRequest;
import br.com.digitalhouse.hotelbackend.app.api.dto.response.CategoryDetailedResponse;
import br.com.digitalhouse.hotelbackend.domain.entity.Category;
import br.com.digitalhouse.hotelbackend.domain.service.CategoryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class CategoryController implements CategoryApi {
    private final CategoryService categoryService;
    private final ObjectMapper objectMapper;

    @Autowired
    public CategoryController(CategoryService categoryService, ObjectMapper objectMapper) {
        this.categoryService = categoryService;
        this.objectMapper = objectMapper;
    }

    @Override
    public ResponseEntity<CategoryDetailedResponse> create(CategoryRequest request) {
        Category category = objectMapper.convertValue(request, Category.class);
        Category categoryCreate = categoryService.create(category);
        CategoryDetailedResponse categoryDetailedResponse = categoryDetailedResponse(categoryCreate);
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryDetailedResponse);
    }

    @Override
    public ResponseEntity<Page<CategoryDetailedResponse>> findByAll(Pageable pageable) {
        Page<Category> categoryPageable = categoryService.findByall(pageable);
        Page<CategoryDetailedResponse> response = categoryPageable
                .map(category -> new CategoryDetailedResponse(category.getId(),category.getDescription(),category.getQualification(),category.getImageUrl()));

        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<CategoryDetailedResponse> update(Long id, Map<String, Object> campos) {
        Category category = categoryService.update(id, campos);
        CategoryDetailedResponse categoryDetailedResponse = categoryDetailedResponse(category);
        return ResponseEntity.ok().body(categoryDetailedResponse);
    }

    @Override
    public ResponseEntity<Void> delete(Long id) {
        categoryService.delete(id);
        return ResponseEntity.noContent().build();
    }


    private CategoryDetailedResponse categoryDetailedResponse(Category category) {
        return objectMapper.convertValue(category, CategoryDetailedResponse.class);
    }
}
