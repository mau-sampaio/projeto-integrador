package br.com.digitalhouse.hotelbackend.domain.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long id;
    @NotNull
    private Integer qualification;
    @NotBlank
    private String description;
    @NotBlank
    private String imageUrl;

    public Category(Integer qualification, String description, String imageUrl) {
        this.qualification = qualification;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public Category(Long id, Integer qualification, String description, String imageUrl) {
        this.id = id;
        this.qualification = qualification;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}