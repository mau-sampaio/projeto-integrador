package br.com.digitalhouse.hotelbackend.app.api.controller;

import br.com.digitalhouse.hotelbackend.app.api.CityApi;
import br.com.digitalhouse.hotelbackend.app.api.dto.request.CityRequest;
import br.com.digitalhouse.hotelbackend.app.api.dto.response.CityDetailesResponse;
import br.com.digitalhouse.hotelbackend.domain.entity.City;
import br.com.digitalhouse.hotelbackend.domain.service.CityService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class CityController implements CityApi {

    private final CityService cityService;

    private final ObjectMapper objectMapper;

    public CityController(CityService cityService, ObjectMapper objectMapper) {
        this.cityService = cityService;
        this.objectMapper = objectMapper;
    }
    @Override
    public ResponseEntity<CityDetailesResponse> create(CityRequest request) {
       City city = objectMapper.convertValue(request, City.class);
       City cityCreate =  cityService.create(city);
       CityDetailesResponse cityDetailesResponse =  cityDetailesResponse(cityCreate);
       return ResponseEntity.status(HttpStatus.CREATED).body(cityDetailesResponse);
    }

    @Override
    public ResponseEntity<Page<CityDetailesResponse>> findByAll(Pageable pageable) {
        Page<City> cityPageable = cityService.findByAll(pageable);
        Page<CityDetailesResponse> response = cityPageable
                .map(city -> new CityDetailesResponse(
                        city.getNome(),
                        city.getPais()
    ));
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<CityDetailesResponse> update(Long id, Map<String, Object> campos) {
        City city = cityService.update(id, campos);
        CityDetailesResponse cityDetailesResponse = cityDetailesResponse(city);
        return ResponseEntity.ok().body(cityDetailesResponse);
    }

    @Override
    public ResponseEntity<Void> delete(Long id) {
        cityService.delete(id);
        return ResponseEntity.noContent().build();
    }

    private CityDetailesResponse cityDetailesResponse(City city) {
        return objectMapper.convertValue(city, CityDetailesResponse.class);
    }
}
