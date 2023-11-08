package br.com.digitalhouse.hotelbackend.domain.service;

import br.com.digitalhouse.hotelbackend.domain.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Map;
import java.util.UUID;

public interface CategoryService {
    Category create(Category category);

    Page<Category> findByall(Pageable pageable);
    Category update(UUID id, Map<String, Object>campos);

    void delete (UUID id);

}
