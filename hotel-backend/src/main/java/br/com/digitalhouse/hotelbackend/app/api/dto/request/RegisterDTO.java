package br.com.digitalhouse.hotelbackend.app.api.dto.request;

import br.com.digitalhouse.hotelbackend.domain.entity.UserRole;

public record RegisterDTO(String login, String firstName, String lastName, String password, UserRole role) {
}
