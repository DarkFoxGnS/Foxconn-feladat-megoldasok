package com.foxconn.foxconnectspring.dtos;

import jakarta.persistence.Column;
import lombok.Data;

import java.util.UUID;

@Data
public class PostDto {

    private UUID id;

    private String title;

    private String body;
	
	public Boolean checkValidity(boolean shouldHaveId){
		
		return this.getTitle().length() > 1 && this.getTitle().length() < 50
			&& this.getBody().length() > 1 && this.getBody().length() < 2000
			&& (shouldHaveId ? this.getId() != null : this.getId() == null);
		
	}
}
