package br.com.digitalhouse.hotelbackend.domain.service;

import br.com.digitalhouse.hotelbackend.domain.entity.enums.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Map;
import java.util.UUID;

public interface CatetoryService {
    Category create(Category category);
    Category findByID(UUID id);
    Page<Category> findByall(Pageable pageable);
    Category update(UUID id, Map<String, Object>campos);

    void delete (UUID id);

}
