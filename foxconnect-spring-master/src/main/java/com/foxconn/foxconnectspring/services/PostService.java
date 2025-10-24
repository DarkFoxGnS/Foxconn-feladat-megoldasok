package com.foxconn.foxconnectspring.services;

import com.foxconn.foxconnectspring.dtos.PostDto;
import com.foxconn.foxconnectspring.entities.Post;
import com.foxconn.foxconnectspring.mappers.PostMapper;
import com.foxconn.foxconnectspring.repositories.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;
import java.util.UUID;

@Service
public class PostService {

    private final PostRepository postRepository;

    private final PostMapper mapper;

    public PostService(PostRepository postRepository, PostMapper mapper) {
        this.postRepository = postRepository;
        this.mapper = mapper;
    }

    public PostDto findById(UUID id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Post not found with id: " + id));
        return mapper.toDTO(post);
    }
	
	//TODO: write the methods needed for the endpoints of the controller class
	//Done
	
	//Converts and saves the post. Returns the new post if completed without errors.
	/*
		Approach:
			Maps the DTO to an entity, if the DTO was empty, the post will be empty, the conversion failed, return.
			Saves the post trough Jakarta.
			Returns the DTO.
	*/
	public PostDto addPost(PostDto postDto){
		Post post = mapper.toEntity(postDto);
		if (post == null){
			return null;
		}
		postRepository.save(post);
		return postDto;
	}
	
	//Returns all the posts currently in the database. As a list of PostDtos.
	/*
		Approach:
			Finds all post in the database, maps them to become DTOs, returns the list.
	*/
	public List<PostDto> findAll(){
		List<PostDto> posts = new ArrayList<>();
		postRepository.findAll().forEach(post->posts.add(mapper.toDTO(post)));
		return posts;
	}
	//Updates the post provided, by matching IDs.
	//Returns the newly updated post.
	/*
		Approach:
			For safety, convert the DTO to an entity.
			Check if the post by the given ID exists.
			Check if post title changed, if so update it.
			Check if post body changed, if so update it.
			Save the updates (Jakarta will update the same UUID objects)
			Return the newly updated post.
	*/
	public PostDto editPost(PostDto editedPost){
		Post newPost = mapper.toEntity(editedPost); //Convert to ensure safety uppon mapping changing.
Post originalPost = postRepository.findById(newPost.getId())
                .orElseThrow(() -> new EntityNotFoundException("Post not found with id: " + newPost.getId()));
		if (originalPost.getTitle() != newPost.getTitle()){
			originalPost.setTitle(newPost.getTitle());
		}
		if (originalPost.getBody() != newPost.getBody()){
			originalPost.setBody(newPost.getBody());
		}
		postRepository.save(originalPost);
		return mapper.toDTO(originalPost);
	}
    
}
