package com.foxconn.foxconnectspring.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Entity
@Table(name = "t_posts")
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(name = "title", nullable = true)
    private String title;

    @Column(name = "body", nullable = true)
    private String body;
}
