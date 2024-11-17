package com.central.perkrewards.service.reward;


import com.central.perkrewards.dto.RewardDto;
import com.central.perkrewards.exceptions.ResourceNotFoundException;
import com.central.perkrewards.model.Category;
import com.central.perkrewards.model.Reward;
import com.central.perkrewards.repository.CategoryRepository;
import com.central.perkrewards.repository.RewardRepository;
import com.central.perkrewards.request.RewardRequest;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class RewardServiceImpl implements RewardService {
    private final RewardRepository rewardRepository;
    private final CategoryRepository categoryRepository;
    private final ModelMapper modelMapper;

    @Override
    public Reward addReward(RewardRequest request) {
        return rewardRepository.save(createReward(request));
    }
    private Reward createReward(RewardRequest request){
          return  Reward.builder().
                  name(request.name()).
                  description(request.description()).
                  pointsRequired(request.pointsRequired()).
                  image(request.image()).
                  category(request.category()).
                  build();
    }

    @Override
    public Reward getRewardById(Long id) {
        return rewardRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Reward not found!"));
    }

    @Override
    public List<Reward> getAllRewards() {
        return rewardRepository.findAll();
    }

    @Override
    public Reward updateReward(Long id, RewardRequest reward) {
        return rewardRepository.findById(id)
                .map(existingReward -> updateExistingProduct(existingReward,reward))
                .map(rewardRepository :: save)
                .orElseThrow(()-> new ResourceNotFoundException("Reward not found!"));
    }
    private Reward updateExistingProduct(Reward existingReward, RewardRequest request) {
        existingReward.setName(request.name());
        existingReward.setDescription(request.description());
        existingReward.setPointsRequired(request.pointsRequired());
        existingReward.setImage(request.image());

        Category category = categoryRepository.findByName(request.category().getName());
        existingReward.setCategory(category);
        return  existingReward;

    }

    @Override
    public void deleteReward(Long id) {
        rewardRepository.findById(id)
                .ifPresentOrElse(rewardRepository::delete,
                        () -> {throw new ResourceNotFoundException("Reward not found!");});

    }
    public RewardDto convertToDto(Reward reward){
        RewardDto rewardDto=modelMapper.map(reward,RewardDto.class);
        return  rewardDto;
    }
}
