package br.com.digitalhouse.hotelbackend.domain.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;


@Entity(name = "hotel")
@Table(name = "categorys")
@Data
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "CATEGORY_ID")
    private UUID id = UUID.randomUUID();
    @Column(name = "QUALIFICATION")
    @NotNull
    private Integer qualification;
    @Column(name = "DESCRIPTIONS")
    @NotBlank
    private String description;
    @Column(name = "IMAGE_URL")
    @NotBlank
    private String imageUrl;

    public Category(Integer qualification, String description, String imageUrl) {
        this.qualification = qualification;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public Category(UUID id, Integer qualification, String description, String imageUrl) {
        this.id = id;
        this.qualification = qualification;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}