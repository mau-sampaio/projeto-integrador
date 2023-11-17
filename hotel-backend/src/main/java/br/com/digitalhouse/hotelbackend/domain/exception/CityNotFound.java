package br.com.digitalhouse.hotelbackend.domain.exception;

public class CityNotFound extends RuntimeException{
    public CityNotFound(Long id) {
        super("City com id: %s não encontrada!".formatted(id));
    }
}
