package br.com.digitalhouse.hotelbackend.domain.exception;

public class CategoryNotFound extends NotFoundException {

    public CategoryNotFound(Long id) {
        super("Categoria não encontrado! ID invalido: " + id);
    }
}
