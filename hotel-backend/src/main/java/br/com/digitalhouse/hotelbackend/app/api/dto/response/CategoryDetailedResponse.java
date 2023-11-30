package br.com.digitalhouse.hotelbackend.app.api.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;


@Getter
@Setter
@AllArgsConstructor
public class CategoryDetailedResponse {
    @Schema(name = "ID", example = "5263f5a9-3d00-43a8-9a1a-3ea1c015344a")
    private Long id;
    @Schema(name = "qualification", example = "5")
    private Integer qualification;
    @Schema(name = "description", example = "resort")
    private String description;
    @Schema(name = "imageUrl", example = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=1200&h=-1&s=1")
    private String imageUrl;

}
