package com.foxconn.foxconnectspring.services;

import com.foxconn.foxconnectspring.dtos.PostDto;
import com.foxconn.foxconnectspring.entities.Post;
import com.foxconn.foxconnectspring.mappers.PostMapper;
import com.foxconn.foxconnectspring.repositories.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

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
}
