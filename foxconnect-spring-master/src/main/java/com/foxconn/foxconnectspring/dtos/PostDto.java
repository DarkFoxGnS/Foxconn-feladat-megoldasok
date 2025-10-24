package com.foxconn.foxconnectspring.dtos;

import jakarta.persistence.Column;
import lombok.Data;

import java.util.UUID;

@Data
public class PostDto {

    private UUID id;

    private String title;

    private String body;
}
