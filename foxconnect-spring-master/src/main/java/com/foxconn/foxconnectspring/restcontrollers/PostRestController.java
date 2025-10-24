package com.foxconn.foxconnectspring.restcontrollers;

import com.foxconn.foxconnectspring.dtos.PostDto;
import com.foxconn.foxconnectspring.services.PostService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
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
	//Done
	/**Expected request body as:
	{
		"title":"<title here>",
		"body":"<body here>"
	}
	**/
	@PostMapping("/add")
	public PostDto addPost(@RequestBody PostDto post){
		if (post.checkValidity(false)){
			return postService.addPost(post);
		}
		throw new InternalError("Id was provided in the request");
	}

    //TODO: write a method that returns a list of all posts
	//Done
	//Returns a list of PostDtos to the client.
	@GetMapping("/all")
	public List<PostDto> getAll (){
		return postService.findAll();
	}
	
    //TODO: Write a method to update a post by ID (@PatchMapping)
	//Done
	/**Expected request body as:
	{
		"id":"<id here>".
		"title":"<title here>",
		"body":"<body here>"
	}
	**/
	//Returns the updated PostDto on success.
	@PatchMapping("/update")
	public PostDto editPost(@RequestBody PostDto post){
		if (post.checkValidity(true)){
			return postService.editPost(post);
		}
		throw new InternalError("Id was not provided in the request");
	}
}
