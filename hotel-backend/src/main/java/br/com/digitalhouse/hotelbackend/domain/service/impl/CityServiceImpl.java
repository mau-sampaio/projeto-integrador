package br.com.digitalhouse.hotelbackend.domain.service.impl;

import br.com.digitalhouse.hotelbackend.domain.entity.City;
import br.com.digitalhouse.hotelbackend.domain.exception.CityNotFound;
import br.com.digitalhouse.hotelbackend.domain.repository.CityRepository;
import br.com.digitalhouse.hotelbackend.domain.service.CityService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.Map;
@Slf4j
@Service
public class CityServiceImpl implements CityService {
    @Autowired
    private final CityRepository cityRepository;
    @Autowired
    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }
    @Override
    public City create(City city) {
        return cityRepository.save(city);
    }

    @Override
    public City findById(Long id) {
        return cityRepository.findById(id).orElseThrow(()-> new CityNotFound(id));
    }

    @Override
    public Page<City> findByAll(Pageable pageable) {
        return cityRepository.findAll(pageable);
    }

    @Override
    public City update(Long id, Map<String, Object> campos) {
        City city = cityRepository.findById(id).orElseThrow();

        for (Field field : City.class.getDeclaredFields()) {
            String fieldName = field.getName();
            if (campos.containsKey(fieldName)) {
                try {
                    field.setAccessible(true);
                    Object newValue = campos.get(fieldName);
                    field.set(city, newValue);
                } catch (IllegalAccessException e) {
                    log.error("Erro ao definir valor do campo: " + fieldName, e);
                }
            }
        }
        return cityRepository.save(city);
    }
    @Override
    public void delete(Long id) {
    City city = cityRepository.findById(id).orElseThrow();
    cityRepository.delete(city);
    }
}
