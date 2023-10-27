package br.com.digitalhouse.hotelbackend.app.api.controller;


import br.com.digitalhouse.hotelbackend.app.api.CategoryApi;
import br.com.digitalhouse.hotelbackend.app.api.dto.request.CategoryRequest;
import br.com.digitalhouse.hotelbackend.app.api.dto.response.CategoryDetailedResponse;
import br.com.digitalhouse.hotelbackend.domain.entity.enums.Category;
import br.com.digitalhouse.hotelbackend.domain.service.CatetoryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController implements CategoryApi {
    private final CatetoryService catetoryService;
    private final ObjectMapper objectMapper;

    @Autowired
    public CategoryController(CatetoryService catetoryService, ObjectMapper objectMapper) {
        this.catetoryService = catetoryService;
        this.objectMapper = objectMapper;
    }

    @Override
    public ResponseEntity<CategoryDetailedResponse> create(CategoryRequest request) {
        Category category = objectMapper.convertValue(request, Category.class);
        Category categoryCreate = catetoryService.create(category);
        CategoryDetailedResponse categoryDetailedResponse = categoryDetailedResponse(categoryCreate);
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryDetailedResponse);
    }

    private CategoryDetailedResponse categoryDetailedResponse(Category category) {
        return objectMapper.convertValue(category, CategoryDetailedResponse.class);
    }
}
