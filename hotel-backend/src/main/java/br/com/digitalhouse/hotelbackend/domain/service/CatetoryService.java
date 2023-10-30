package br.com.digitalhouse.hotelbackend.domain.service;

import br.com.digitalhouse.hotelbackend.domain.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Map;
import java.util.Optional;

public interface CatetoryService {
    Category create(Category category);
    Category findByID(Long id);
    Page<Category> findByall(Pageable pageable);
    Category update(Long id, Map<String, Object>campos);

    void delete (Long id);

}
