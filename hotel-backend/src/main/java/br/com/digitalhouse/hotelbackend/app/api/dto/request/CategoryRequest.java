package br.com.digitalhouse.hotelbackend.app.api.dto.request;

import lombok.Data;

@Data
public class CategoryRequest {
    private String qualification;
    private String description;
    private String imageUrl;
}
