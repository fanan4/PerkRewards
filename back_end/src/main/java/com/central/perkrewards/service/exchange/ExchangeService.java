package com.central.perkrewards.service.exchange;


import java.util.List;

public interface ExchangeService {
    public List<Long> getMostPopularRewardIds(int limit);
    public int getTotalPointsSpentThisWeek();
}
