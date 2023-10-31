package br.com.digitalhouse.hotelbackend.domain.service.impl;

import br.com.digitalhouse.hotelbackend.domain.entity.Category;
import br.com.digitalhouse.hotelbackend.domain.exception.CategoryNotFound;
import br.com.digitalhouse.hotelbackend.domain.service.impl.repository.CategoryRepository;
import br.com.digitalhouse.hotelbackend.domain.service.CatetoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.Map;

@Slf4j
@Service
public class CategoryServiceImpl implements CatetoryService {

    private CategoryRepository categoryRepository;
    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category create(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category findByID(Long id) {
        return categoryRepository.findById(id).orElseThrow(()-> new CategoryNotFound(id));
    }

    @Override
    public Page<Category> findByall(Pageable pageable) {
        return categoryRepository.findAll(pageable);
    }

    @Override
    public Category update(Long id, Map<String, Object> campos) {
        Category category = categoryRepository.findById(id).orElseThrow();

        for (Field field : Category.class.getDeclaredFields()) {
            String fieldName = field.getName();
            if (campos.containsKey(fieldName)) {
                try {
                    field.setAccessible(true);
                    Object newValue = campos.get(fieldName);
                    field.set(category, newValue);
                } catch (IllegalAccessException e) {
                    log.error("Erro ao definir valor do campo: " + fieldName, e);
                }
            }
        }

        return categoryRepository.save(category);
    }


    @Override
    public void delete(Long id) {
        Category category = categoryRepository.findById(id).orElseThrow();
        categoryRepository.delete(category);
    }
}
