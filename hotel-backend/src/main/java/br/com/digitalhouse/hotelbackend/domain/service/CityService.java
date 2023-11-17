package br.com.digitalhouse.hotelbackend.domain.service;

import br.com.digitalhouse.hotelbackend.domain.entity.City;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Map;

public interface CityService {
    City create(City city);
    City findById(Long id);
    Page<City> findByAll(Pageable pageable);
    City update(Long id, Map<String,Object> campos);
    void delete (Long id);
}
