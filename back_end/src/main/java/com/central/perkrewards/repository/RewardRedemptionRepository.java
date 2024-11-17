package com.central.perkrewards.repository;

import com.central.perkrewards.model.RewardRedemptions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface RewardRedemptionRepository extends JpaRepository<RewardRedemptions ,Long> {
    @Query(value = "SELECT r.reward_id " +
            "FROM reward_redemptions r " +
            "GROUP BY r.reward_id " +
            "ORDER BY COUNT(r.id) DESC " +
            "LIMIT :limit", nativeQuery = true)
    List<Long> findMostPopularRewardIds(@Param("limit") int limit);

    @Query("SELECT SUM(r.points_spent) " +
            "FROM RewardRedemptions r " +
            "WHERE r.redemptionDate >= :startOfWeek")
    Integer findTotalPointsSpentThisWeek(LocalDateTime startOfWeek);

}
