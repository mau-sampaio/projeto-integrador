package br.com.digitalhouse.hotelbackend.domain.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class City {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String pais;
}
