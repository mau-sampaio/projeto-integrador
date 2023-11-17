package br.com.digitalhouse.hotelbackend.domain.exception;

public class ProductNotFound  extends RuntimeException{
    public ProductNotFound(Long id){
        super("Product com id: %s não encontrado!".formatted(id));
    }
}
