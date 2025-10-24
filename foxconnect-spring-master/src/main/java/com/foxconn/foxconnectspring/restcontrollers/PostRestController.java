package com.foxconn.foxconnectspring.restcontrollers;

import com.foxconn.foxconnectspring.dtos.PostDto;
import com.foxconn.foxconnectspring.services.PostService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/posts")
public class PostRestController {

    private final PostService postService;

    public PostRestController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/{id}")
    public PostDto getPost(@PathVariable UUID id) {
        return postService.findById(id);
    }

    //TODO: write a method to create a post

    //TODO: write a method that returns a list of all posts

    //TODO: Write a method to update a post by ID (@PatchMapping)
}
