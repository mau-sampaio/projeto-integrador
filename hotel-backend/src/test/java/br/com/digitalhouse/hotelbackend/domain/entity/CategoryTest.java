package br.com.digitalhouse.hotelbackend.domain.entity;

import jakarta.validation.ConstraintViolationException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertThrows;

public class CategoryTest {

    @Test
    public void givenValidParams_whenCallNewCategory_theInstantiateACategory() {
        final var expectedId = UUID.randomUUID();
        final var expectedQualication = 5;
        final var expectedDescription = "hotel";
        final var expectedImage = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=1200&h=-1&s=1";

        final var actualCategory = new Category(expectedId, expectedQualication, expectedDescription, expectedImage);

        Assertions.assertNotNull(actualCategory);
        Assertions.assertNotNull(actualCategory.getId());
        Assertions.assertEquals(expectedQualication, actualCategory.getQualification());
        Assertions.assertEquals(expectedDescription, actualCategory.getDescription());
        Assertions.assertEquals(expectedImage, actualCategory.getImageUrl());
    }


}
