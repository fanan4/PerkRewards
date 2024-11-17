package com.central.perkrewards.service.reward;

import com.central.perkrewards.dto.RewardDto;
import com.central.perkrewards.model.Reward;
import com.central.perkrewards.request.RewardRequest;

import java.util.List;

public interface RewardService {
    public Reward addReward(RewardRequest request);
    Reward getRewardById(Long id);
    List<Reward> getAllRewards();
    Reward updateReward(Long id, RewardRequest reward);
    void deleteReward(Long id);
    RewardDto convertToDto(Reward reward);
}
