package com.central.perkrewards.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Blob;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Reward {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = true)
    private String description;

    @Column(nullable = false)
    private int pointsRequired;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @OneToMany(mappedBy = "category")
    private List<RewardRedemptions> rewards;
    @Lob
    @Column(name = "image", nullable = true)
    private Blob image;

}
