package br.com.digitalhouse.hotelbackend.domain.exception;

import java.util.UUID;

public class CategoryNotFound extends NotFoundException {

    public CategoryNotFound(UUID id) {
        super("Categoria não encontrado! ID invalido: " + id);
    }
}
