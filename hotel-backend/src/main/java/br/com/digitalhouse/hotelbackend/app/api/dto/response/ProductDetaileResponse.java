package br.com.digitalhouse.hotelbackend.app.api.dto.response;

import br.com.digitalhouse.hotelbackend.domain.entity.Feature;
import br.com.digitalhouse.hotelbackend.domain.entity.Image;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ProductDetaileResponse {
    private Long id;
    private String nome;
    private String description;
    private List<Feature> featureList;
    private List<Image> imageList;
}
