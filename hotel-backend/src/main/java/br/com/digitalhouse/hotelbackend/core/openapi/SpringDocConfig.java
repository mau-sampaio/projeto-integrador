package br.com.digitalhouse.hotelbackend.core.openapi;
import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDocConfig {

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Hotel - Rest API")
                        .description("API aberta para clientes")
                        .version("1.0")
                        .termsOfService("Termo de uso: Open Source")
                        .license(new License()
                                .name("Apache 2.0")
                                .url("https://github.com/mau-sampaio/projeto-integrador/tree/backend")
                        )
                ).externalDocs(
                        new ExternalDocumentation()
                                .description("Grupo 8")
                                .url("https://github.com/mau-sampaio/projeto-integrador/tree/backend"));
    }


}
