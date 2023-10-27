package br.com.digitalhouse.hotelbackend.app.api.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;


@Data
@AllArgsConstructor
public class CategoryDetailedResponse {
    private UUID id;
    private String qualification;
    private String description;
    private String imageUrl;

}
