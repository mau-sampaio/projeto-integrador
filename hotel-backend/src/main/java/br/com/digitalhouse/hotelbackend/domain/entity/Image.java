package br.com.digitalhouse.hotelbackend.domain.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Image {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tituloImagem;
    private String urlImagem;

    public Image(Long id, String tituloImagem, String urlImagem) {
        this.id = id;
        this.tituloImagem = tituloImagem;
        this.urlImagem = urlImagem;
    }
}
