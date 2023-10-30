package br.com.digitalhouse.hotelbackend.app.api;

import br.com.digitalhouse.hotelbackend.app.api.dto.request.CategoryRequest;
import br.com.digitalhouse.hotelbackend.app.api.dto.response.CategoryDetailedResponse;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping("v1/category")
public interface CategoryApi {
    @PostMapping
    ResponseEntity<CategoryDetailedResponse> create (@RequestBody @Valid CategoryRequest request);

    @GetMapping
    ResponseEntity<Page<CategoryDetailedResponse>> findByAll(@PageableDefault Pageable pageable);
    @PatchMapping("{id}")
    ResponseEntity<CategoryDetailedResponse> atualizarClinicaPorId(@PathVariable Long id, @RequestBody Map<String, Object> campos);

    @DeleteMapping("{id}")
    ResponseEntity<Void> delete(@PathVariable Long id);

}