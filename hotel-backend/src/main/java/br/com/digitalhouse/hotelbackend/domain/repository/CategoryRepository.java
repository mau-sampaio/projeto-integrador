package br.com.digitalhouse.hotelbackend.domain.repository;

import br.com.digitalhouse.hotelbackend.domain.entity.enums.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CategoryRepository extends JpaRepository<Category,UUID > {
}
