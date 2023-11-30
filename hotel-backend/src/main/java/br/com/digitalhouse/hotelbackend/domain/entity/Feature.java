package br.com.digitalhouse.hotelbackend.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Feature {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToMany(mappedBy = "features", cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Product> features;

    private String nome;
    private String icon;

    public Feature(String nome, String icon) {
        this.nome = nome;
        this.icon = icon;
    }
}
