package br.com.digitalhouse.hotelbackend.domain.entity;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


public class CategoryTest {

    @Test
    public void givenValidParams_whenCallNewCategory_theInstantiateACategory() {
        final var expectedQualication = 5;
        final var expectedDescription = "hotel";
        final var expectedImage = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=1200&h=-1&s=1";

        final var actualCategory = new Category(expectedQualication, expectedDescription, expectedImage);

        Assertions.assertNotNull(actualCategory);
        Assertions.assertNotNull(actualCategory.getId());
        Assertions.assertEquals(expectedQualication, actualCategory.getQualification());
        Assertions.assertEquals(expectedDescription, actualCategory.getDescription());
        Assertions.assertEquals(expectedImage, actualCategory.getImageUrl());
    }

    @Test
    public void givenNullDescription_whenCreateCategory_thenArgumentIsNotNull() {
        final var qualification = 3;
        final String description = null;
        final var image = "image";

        Category novaCategory =  new Category(qualification, description, image);
        assertThat(novaCategory).isNotNull();
    }

    @Test
    public void givenCategory_whenUpdateQualification_thenQualificationIsUpdated() {
        final var initialQualification = 3;
        final var category = new Category(initialQualification, "hotel", "image");

        final var newQualification = 4;
        category.setQualification(newQualification);

        Assertions.assertEquals(newQualification, category.getQualification());
    }



}
