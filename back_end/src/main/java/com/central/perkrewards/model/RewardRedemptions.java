package com.central.perkrewards.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RewardRedemptions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private int points_spent;
    @ManyToOne
    @JoinColumn(name = "reward_id", nullable = false)
    private Reward reward;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users customer;

    @Column(name = "redemption_date", nullable = false)
    private LocalDateTime redemptionDate;
}
