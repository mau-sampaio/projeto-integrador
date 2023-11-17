package br.com.digitalhouse.hotelbackend.domain.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Product {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @ManyToMany
    private List<Feature> feature;
    private String nome;
    private String description;
    @OneToMany
    private List<Image> image;
}
