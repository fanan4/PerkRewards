package com.central.perkrewards.repository;

import com.central.perkrewards.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface SaleRepository extends JpaRepository<Sale,Long> {
    @Query(value = "SELECT s.customer_id " +
            "FROM sale s " +
            "GROUP BY s.customer_id " +
            "ORDER BY COUNT(s.id) DESC " +
            "LIMIT :limit", nativeQuery = true)
    List<Long> findMostLoyalCustomerIds(@Param("limit") int limit);

    @Query(value = "SELECT SUM(s.points_earned) " +
            "FROM sale s " +
            "WHERE s.sale_date >= :startOfWeek", nativeQuery = true)
    Integer findTotalPointsEarnedThisWeek(@Param("startOfWeek") LocalDateTime startOfWeek);
}
