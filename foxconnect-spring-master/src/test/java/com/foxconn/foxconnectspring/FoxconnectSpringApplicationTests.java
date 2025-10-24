package com.foxconn.foxconnectspring;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.springframework.boot.test.context.SpringBootTest;

import com.foxconn.foxconnectspring.dtos.PostDto;
import com.foxconn.foxconnectspring.entities.Post;
import com.foxconn.foxconnectspring.mappers.PostMapper;
import com.foxconn.foxconnectspring.repositories.PostRepository;
import com.foxconn.foxconnectspring.restcontrollers.PostRestController;
import com.foxconn.foxconnectspring.services.PostService;

import java.util.UUID;
@SpringBootTest
class FoxconnectSpringApplicationTests {

    @Test
    void contextLoads() {   
    }
	
	@Test
	void entityToDto(){
		PostMapper mapper = new PostMapper();
		
		Post postEntity = new Post();
		UUID id = UUID.randomUUID();
		postEntity.setId(id);
		postEntity.setTitle("Test-Title");
		postEntity.setBody("Test-Body");
		
		PostDto postDto = mapper.toDTO(postEntity);
		
		Assertions.assertEquals(postDto.getId(),id);
		Assertions.assertEquals(postDto.getTitle(),"Test-Title");
		Assertions.assertEquals(postDto.getBody(),"Test-Body");
	}
	
	@Test
	void dtoToEntity(){
		PostMapper mapper = new PostMapper();
		
		PostDto postDto = new PostDto();
		UUID id = UUID.randomUUID();
		postDto.setId(id);
		postDto.setTitle("Test-Title");
		postDto.setBody("Test-Body");
		
		Post postEntity = mapper.toEntity(postDto);
		
		Assertions.assertEquals(postEntity.getId(),id);
		Assertions.assertEquals(postEntity.getTitle(),"Test-Title");
		Assertions.assertEquals(postEntity.getBody(),"Test-Body");
	}
	
	void checkDtoValidity(){
		String shortTitle = new String(new char[0]).replace('\0',' ');
		String goodTitle = new String(new char[25]).replace('\0',' ');
		String longTitle = new String(new char[51]).replace('\0',' ');
		
		String shortBody = new String(new char[0]).replace('\0',' ');
		String goodBody = new String(new char[1000]).replace('\0',' ');
		String longBody = new String(new char[2001]).replace('\0',' ');
		
		UUID id = UUID.randomUUID();
		
		PostDto post = new PostDto();
		
		//no UUID
		//good body
		post.setBody(goodBody);
		//short title
		post.setTitle(shortTitle);
		Assertions.assertEquals(post.checkValidity(false),false);
		//good title
		post.setTitle(goodTitle);
		Assertions.assertEquals(post.checkValidity(false),true);
		//long title
		post.setTitle(longTitle);
		Assertions.assertEquals(post.checkValidity(false),false);
		
		//good body
		post.setTitle(goodTitle);
		//short Body
		post.setBody(shortBody);
		Assertions.assertEquals(post.checkValidity(false),false);
		//good Body
		post.setBody(goodBody);
		Assertions.assertEquals(post.checkValidity(false),true);
		//long Body
		post.setBody(longBody);
		Assertions.assertEquals(post.checkValidity(false),false);
		
		//Good body and good title
		post.setBody(goodBody);
		Assertions.assertEquals(post.checkValidity(false),true);
		
		//should have UUID
		Assertions.assertEquals(post.checkValidity(true),false);
		
		//has ID
		post.setId(id);
		Assertions.assertEquals(post.checkValidity(true),true);
		
		//shouldn't have UUID
		Assertions.assertEquals(post.checkValidity(false),false);
	}
	
	/**
	Further tests regarding to the API and the database were carried out trough the use of Insomnia on API end points of:
	/posts/add:
		curl --request POST \
	  --url 'http://localhost:8080/posts/add?=' \
	  --header 'Content-Type: application/json' \
	  --header 'User-Agent: insomnia/11.6.2' \
	  --data '{
		"title":"My first post",
		"body":"Test data"
		}'
		
	/posts/all:
		curl --request GET \
	  --url http://localhost:8080/posts/all \
	  --header 'User-Agent: insomnia/11.6.2'
	  
	/posts/{id}:
		curl --request GET \
		--url http://localhost:8080/posts/{id} \
		--header 'User-Agent: insomnia/11.6.2'
	
	/posts/update:
		curl --request PATCH \
		--url http://localhost:8080/posts/update \
		--header 'Content-Type: application/json' \
		--header 'User-Agent: insomnia/11.6.2' \
		--data '{
			"id": "{id}",
			"title": "Updated post",
			"body": "updated"
		}'
	**/
	
	
}
