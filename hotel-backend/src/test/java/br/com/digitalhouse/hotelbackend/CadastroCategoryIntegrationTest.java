package br.com.digitalhouse.hotelbackend;
import br.com.digitalhouse.hotelbackend.domain.entity.Category;
import br.com.digitalhouse.hotelbackend.domain.exception.CategoryNotFound;
import br.com.digitalhouse.hotelbackend.domain.service.CategoryService;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import jakarta.validation.ConstraintViolationException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.ActiveProfiles;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
@ActiveProfiles("test")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CadastroCategoryIntegrationTest {


	@LocalServerPort
	private int port;
	@Autowired
	private CategoryService categoryService;

	@BeforeEach
	public void setup(){
		RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
		RestAssured.port = port;
		RestAssured.basePath = "v1/category";
	}

	@Test
	public void deveCadastrarTestarQuandoCadastroCategorySucesso() {
		Category novaCategory = new Category();
		novaCategory.setDescription("hotel");
		novaCategory.setQualification("5");
		novaCategory.setImageUrl("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=1200&h=-1&s=1");

		categoryService.create(novaCategory);

		assertThat(novaCategory).isNotNull();
		assertThat(novaCategory.getId()).isNotNull();

	}

	@Test
	public void deveFalharCadastrarCategoryQuandoParametroVazio() {
		Category novaCategory = new Category();
		novaCategory.setImageUrl(null);
		novaCategory.setQualification(null);
		novaCategory.setDescription(null);
		assertThrows(ConstraintViolationException.class, () -> {
			categoryService.create(novaCategory);
		});

	}

	@Test
	public void deveFalharExcluirCategoryQuandoCategoryInexistente() {
		Category novaCategory = new Category();
		novaCategory.setId(10L);
		novaCategory.setImageUrl("teste");
		novaCategory.setQualification("teste");
		novaCategory.setDescription("teste");
		assertThrows(CategoryNotFound.class, () -> {
			categoryService.delete(novaCategory.getId());
		});

	}


	@Test
	public void deveRetornarStatus200_QuandoConsultarCategory() {

		RestAssured.given()
				.body("{\"qualification\" : \"description\" : \"imageUrl\"}")
					.accept(ContentType.JSON)
				.when()
					.get()
				.then()
					.statusCode(HttpStatus.OK.value());
	}

	@Test
	public void deveRetornarStatus404_QuandoExcluirCategoryNaoExiste() {

		RestAssured.given()
				.pathParam("categoryId",10)
					.accept(ContentType.JSON)
				.when()
					.delete("/{categoryId}")
				.then()
					.statusCode(HttpStatus.NOT_FOUND.value());
	}
}