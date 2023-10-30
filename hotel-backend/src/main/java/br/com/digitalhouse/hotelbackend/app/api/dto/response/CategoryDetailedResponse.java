package br.com.digitalhouse.hotelbackend.app.api.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class CategoryDetailedResponse {
    private Long id;
    private String qualification;
    private String description;
    private String imageUrl;

}
