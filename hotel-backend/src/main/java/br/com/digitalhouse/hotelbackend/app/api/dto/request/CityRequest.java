package br.com.digitalhouse.hotelbackend.app.api.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CityRequest {
   private String nome;
   private String pais;
}
