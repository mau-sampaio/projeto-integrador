package br.com.digitalhouse.hotelbackend.app.api;

import br.com.digitalhouse.hotelbackend.app.api.dto.request.ProductRequest;
import br.com.digitalhouse.hotelbackend.app.api.dto.response.ProductDetaileResponse;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping("v1/product")
public interface ProductApi {
    @PostMapping
    ResponseEntity<ProductDetaileResponse> create (@RequestBody @Valid ProductRequest request);

    @GetMapping
    ResponseEntity<Page<ProductDetaileResponse>> findByAll(@PageableDefault Pageable pageable);

    @PatchMapping("{id}")
    ResponseEntity<ProductDetaileResponse> update(@PathVariable Long id, @RequestBody Map<String, Object> campos);

    @DeleteMapping("{id}")
    ResponseEntity<Void> delete(@PathVariable Long id);
}
