package br.com.digitalhouse.hotelbackend.app.api.dto.response;

import lombok.Data;

import java.util.UUID;


@Data
public class CategoryDetailedResponse {
    private UUID id;
    private String qualification;
    private String description;
    private String imageUrl;
}
