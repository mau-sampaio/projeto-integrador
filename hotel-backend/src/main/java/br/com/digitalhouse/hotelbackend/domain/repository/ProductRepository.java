package br.com.digitalhouse.hotelbackend.domain.repository;

import br.com.digitalhouse.hotelbackend.domain.entity.Category;
import br.com.digitalhouse.hotelbackend.domain.entity.City;
import br.com.digitalhouse.hotelbackend.domain.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository <Product, Long> {

    List<Product> findByCategory(Category category);
    List<Product> findByCity(City city);
}
