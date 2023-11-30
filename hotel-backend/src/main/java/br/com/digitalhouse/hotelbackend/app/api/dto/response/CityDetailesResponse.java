package br.com.digitalhouse.hotelbackend.app.api.dto.response;

import br.com.digitalhouse.hotelbackend.domain.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CityDetailesResponse {
    private String nome;
    private String pais;
}
