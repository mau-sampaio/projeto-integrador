package br.com.digitalhouse.hotelbackend.domain.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity(name = "hotel")
@Table(name = "categorys")
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Category {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CATEGORY_ID")
    private Long id;
    @Column(name = "QUALIFICATION")
    @NotBlank
    private String qualification;
    @Column(name = "DESCRIPTIONS")
    @NotBlank
    private String description;
    @Column(name = "IMAGE_URL")
    @NotBlank
    private String imageUrl;
}
