package com.central.perkrewards.service.sale;

import com.central.perkrewards.repository.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SaleServiceImpl implements SaleService{
    private final SaleRepository saleRepository;

    public List<Long> getMostLoyalCustomerIds(int limit) {
        return saleRepository.findMostLoyalCustomerIds(limit);
    }

    public int getTotalPointsEarnedThisWeek() {
        LocalDateTime startOfWeek = LocalDateTime.now()
                .with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))
                .withHour(0).withMinute(0).withSecond(0).withNano(0);
        Integer totalPointsEarned = saleRepository.findTotalPointsEarnedThisWeek(startOfWeek);
        return totalPointsEarned != null ? totalPointsEarned : 0;
    }
}
