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
@CrossOrigin
@RequestMapping("v1/category")
public interface CategoryApi {
    @PostMapping
    ResponseEntity<CategoryDetailedResponse> create (@RequestBody @Valid CategoryRequest request);

    @GetMapping
    ResponseEntity<Page<CategoryDetailedResponse>> findByAll(@PageableDefault Pageable pageable);
    @PatchMapping("{categoryId}")
    ResponseEntity<Void> update(@PathVariable Long categoryId,
                                      @RequestBody Map<String, Object> fields);

    @DeleteMapping("{categoryId}")
    ResponseEntity<Void> delete(@PathVariable Long categoryId);

}
