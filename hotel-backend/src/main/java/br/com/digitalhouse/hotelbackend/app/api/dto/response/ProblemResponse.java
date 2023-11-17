package br.com.digitalhouse.hotelbackend.app.api.dto.response;

public record ProblemResponse(
        int status,
        String detail,
        String message) {
}
