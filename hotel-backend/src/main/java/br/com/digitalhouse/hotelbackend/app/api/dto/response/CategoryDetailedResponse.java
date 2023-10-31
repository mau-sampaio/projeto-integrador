package br.com.digitalhouse.hotelbackend.app.api.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
public class CategoryDetailedResponse {
    private Long id;
    private String qualification;
    private String description;
    private String imageUrl;

}
