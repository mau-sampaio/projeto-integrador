package br.com.digitalhouse.hotelbackend.domain.service.impl;

import br.com.digitalhouse.hotelbackend.domain.entity.Category;
import br.com.digitalhouse.hotelbackend.domain.exception.CategoryNotFound;
import br.com.digitalhouse.hotelbackend.domain.repository.CategoryRepository;
import br.com.digitalhouse.hotelbackend.domain.service.CategoryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.data.util.ReflectionUtils;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.Map;

import static org.springframework.util.ReflectionUtils.findField;
import static org.springframework.util.ReflectionUtils.getField;


@Service
@Slf4j
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    private final ObjectMapper mapper;

    public CategoryServiceImpl(CategoryRepository categoryRepository, ObjectMapper mapper) {
        this.categoryRepository = categoryRepository;
        this.mapper = mapper;
    }

    @Override
    public Category create(Category category) {
        return categoryRepository.save(category);
    }


    @Override
    public Page<Category> findByall(Pageable pageable) {
        return categoryRepository.findAll(pageable);
    }

    @Override
    public Category update(Long id, Map<String, Object> fields) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new CategoryNotFound(id));
        Category input = mapper.convertValue(fields, Category.class);
        fields.forEach((property, value) -> {
            Field field = findField(Category.class, property);
            if (field == null) {
                log.error("field not found in payload! '%s', I will skip it.".formatted(property));
                return;
            }
            field.setAccessible(true);
            Object newValue = getField(field, input);
            ReflectionUtils.setField(field, category, newValue);
        });
        return categoryRepository.save(category);
    }



    @Override
    public void delete(Long id) {
        Category category = categoryRepository.findById(id).orElseThrow(()-> new CategoryNotFound(id));
        categoryRepository.delete(category);
    }
}