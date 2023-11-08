package br.com.digitalhouse.hotelbackend.app.api.dto.request;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import static io.swagger.v3.oas.annotations.media.Schema.AccessMode.READ_ONLY;

@Getter
@Setter
public class CategoryRequest {
    @Schema(name = "qualification", example = "5")
    private Integer qualification;
    @Schema(name = "description", example = "Hotel")
    private String description;
    @Schema(name = "imageUrl", example = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=1200&h=-1&s=1")
    private String imageUrl;
}
