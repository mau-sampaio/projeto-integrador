package br.com.digitalhouse.hotelbackend.domain.exception;

public class ResourceNotFoundException extends Exception{
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
