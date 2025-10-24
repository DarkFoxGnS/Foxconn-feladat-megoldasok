package com.foxconn.foxconnectspring.dtos;

import jakarta.persistence.Column;
import lombok.Data;

import java.util.UUID;

@Data
public class PostDto {

    private UUID id;

    private String title;

    private String body;
	
	
	/*
		Approach:
			The title is checked to be min-max of 1 and 50.
			The body is checked to be min-max of 1 and 2000.
			If needed, the Id is ensured to exist.
	*/
	//Checks if the DTO is valid.
	public Boolean checkValidity(boolean shouldHaveId){
		return this.getTitle().length() => 1 && this.getTitle().length() <= 50
			&& this.getBody().length() => 1 && this.getBody().length() <= 2000
			&& (shouldHaveId ? this.getId() != null : this.getId() == null);
		
	}
}
