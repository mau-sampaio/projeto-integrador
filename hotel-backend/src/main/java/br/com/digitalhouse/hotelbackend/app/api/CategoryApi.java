package br.com.digitalhouse.hotelbackend.app.api;

import br.com.digitalhouse.hotelbackend.app.api.dto.request.CategoryRequest;
import br.com.digitalhouse.hotelbackend.app.api.dto.response.CategoryDetailedResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.SchemaProperties;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springdoc.core.converters.models.PageableAsQueryParam;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@CrossOrigin
@RequestMapping("v1/category")
@Tag(name = "Category", description = "Gerencia Category")
public interface CategoryApi {
    @Operation(summary = "Criar Category", description = "Retorna uma Category criada")
    @PostMapping
    ResponseEntity<CategoryDetailedResponse> create (@RequestBody @Valid CategoryRequest request);

    @Operation(summary = "Listar Category", description = "Retorna uma lista de category paginada")
    @GetMapping
    @PageableAsQueryParam
    ResponseEntity<Page<CategoryDetailedResponse>> findByAll(@Parameter(hidden = true)@PageableDefault Pageable pageable);

    @Operation(summary = "Atulizar Category", description = "Atuliza category por parametro")
    @PatchMapping("{categoryId}")
    ResponseEntity<Void> update(@Parameter(description = "ID de uma Category") @PathVariable UUID categoryId,
                                @Parameter(hidden = true) @RequestBody Map<String, Object> fields);
    @Operation(summary = "Deleta Category", description = "Deleta category por ID")
    @DeleteMapping("{categoryId}")

    ResponseEntity<Void> delete(@Parameter(description = "ID de uma Category") @PathVariable UUID categoryId);

}
