package br.com.digitalhouse.hotelbackend.app.api.dto.request;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryRequest {
    private String qualification;
    private String description;
    private String imageUrl;
}
