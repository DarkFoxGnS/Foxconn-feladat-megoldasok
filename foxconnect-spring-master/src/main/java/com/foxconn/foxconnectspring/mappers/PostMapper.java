package com.foxconn.foxconnectspring.mappers;

import com.foxconn.foxconnectspring.dtos.PostDto;
import com.foxconn.foxconnectspring.entities.Post;
import org.springframework.stereotype.Component;

@Component
public class PostMapper {

    public PostDto toDTO(Post entity) {
        if (entity == null) return null;

        PostDto dto = new PostDto();
        dto.setId(entity.getId());
        dto.setTitle(entity.getTitle());
        dto.setBody(entity.getBody());
        return dto;
    }
	
	//TODO: write a method to convert post from DTO to entity
	//Done
	public Post toEntity (PostDto post) {
		if (post == null){
			return null;
		}
		Post entity = new Post();
		entity.setId(post.getId());
		entity.setTitle(post.getTitle());
		entity.setBody(post.getBody());
		return entity;
	}
    
}
