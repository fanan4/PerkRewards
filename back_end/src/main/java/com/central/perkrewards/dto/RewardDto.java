package com.central.perkrewards.dto;


import java.sql.Blob;

public class RewardDto {
    private Long id;
    private String name;
    private String description;
    private int pointsRequired;
    private CategoryDto category;
    private Blob image;
}
