package br.com.digitalhouse.hotelbackend.domain.exception;

public class CategoryNotFound extends RuntimeException {
    public CategoryNotFound(Long id){
        super("Category com id: %s não encontrada!".formatted(id));
    }
}
