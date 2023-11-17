package br.com.digitalhouse.hotelbackend.app.api;

import br.com.digitalhouse.hotelbackend.app.api.dto.request.CityRequest;
import br.com.digitalhouse.hotelbackend.app.api.dto.response.CityDetailesResponse;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping("v1/City")
public interface CityApi {
    @PostMapping
    ResponseEntity<CityDetailesResponse> create(@RequestBody @Valid CityRequest request);

    @GetMapping
    ResponseEntity<Page<CityDetailesResponse>> findByAll(@PageableDefault Pageable pageable);

    @PatchMapping("{id}")
    ResponseEntity<CityDetailesResponse> update(@PathVariable Long id, @RequestBody Map<String, Object> campos);

    @DeleteMapping("{id}")
    ResponseEntity<Void> delete(@PathVariable Long id);
}
