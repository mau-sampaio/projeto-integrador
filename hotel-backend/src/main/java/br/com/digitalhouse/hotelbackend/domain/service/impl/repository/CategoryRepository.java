package br.com.digitalhouse.hotelbackend.domain.service.impl.repository;

import br.com.digitalhouse.hotelbackend.domain.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CategoryRepository extends JpaRepository<Category,Long > {
}
