package com.central.perkrewards.service.sale;

import java.util.List;

public interface SaleService {
    public List<Long> getMostLoyalCustomerIds(int limit);
    public int getTotalPointsEarnedThisWeek();
}
