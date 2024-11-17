package com.central.perkrewards.service.exchange;

import com.central.perkrewards.repository.RewardRedemptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExchangeServiceImpl implements ExchangeService{

    private final RewardRedemptionRepository rewardRedemptionRepository;

    public List<Long> getMostPopularRewardIds(int limit) {
        return rewardRedemptionRepository.findMostPopularRewardIds(limit);
    }

    public int getTotalPointsSpentThisWeek() {
        LocalDateTime startOfWeek = LocalDateTime.now().with(TemporalAdjusters.previousOrSame(java.time.DayOfWeek.MONDAY)).withHour(0).withMinute(0).withSecond(0).withNano(0);
        Integer totalPointsSpent = rewardRedemptionRepository.findTotalPointsSpentThisWeek(startOfWeek);
        return totalPointsSpent != null ? totalPointsSpent : 0;
    }
}
