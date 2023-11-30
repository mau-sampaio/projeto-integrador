package br.com.digitalhouse.hotelbackend.domain.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;


import java.util.HashSet;

import java.util.List;
import java.util.Set;

@Entity
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Product {
    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @ManyToMany
    @JoinTable(
            name = "product_feature",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "features_id", columnDefinition = "INT")
    )
    private List<Feature> features;
    private String nome;
    private String description;
    @OneToMany
    private Set<Image> imagens = new HashSet<>();
    @ManyToOne
    private Category category;
    @ManyToOne
    private City city;


    private String nomeProduto;
    private String descricaoProduto;
    private String regrasDaCasa;
    private String saudeSeguranca;
    private String politicaDeCancelamento;
    private String endereco;

    public Product(List<Feature> produtosCaracteristica, Set<Image> imagens, Category categoria, City cidades, Long id, String nomeProduto, String descricaoProduto, String regrasDaCasa, String saudeSeguranca, String politicaDeCancelamento, String endereco) {
        this.features = produtosCaracteristica;
        this.imagens = imagens;
        this.category = categoria;
        this.city = cidades;
        this.nomeProduto = nomeProduto;
        this.descricaoProduto = descricaoProduto;
        this.regrasDaCasa = regrasDaCasa;
        this.saudeSeguranca = saudeSeguranca;
        this.politicaDeCancelamento = politicaDeCancelamento;
        this.endereco = endereco;
    }
}
