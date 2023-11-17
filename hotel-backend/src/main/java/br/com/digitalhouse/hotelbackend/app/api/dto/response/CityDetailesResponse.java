package br.com.digitalhouse.hotelbackend.app.api.dto.response;

import br.com.digitalhouse.hotelbackend.domain.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CityDetailesResponse {
    private Long id;
    private String nome;
    private String pais;
    private Product product;
}
