package com.central.perkrewards.controller;

import com.central.perkrewards.dto.RewardDto;
import com.central.perkrewards.exceptions.ResourceNotFoundException;
import com.central.perkrewards.model.Reward;
import com.central.perkrewards.request.RewardRequest;
import com.central.perkrewards.response.ApiResponse;
import com.central.perkrewards.service.reward.RewardService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
@RequestMapping("/api/rewards")
@RequiredArgsConstructor
public class RewardController {

    private final RewardService rewardService;
    private final ModelMapper modelMapper;

    // CREATE a new Reward
    @PostMapping
    public ResponseEntity<ApiResponse> addReward(@RequestBody RewardRequest rewardRequest) {
        try{
            Reward reward = rewardService.addReward(rewardRequest);
            RewardDto rewardDto = rewardService.convertToDto(reward);
            return  ResponseEntity.ok(new ApiResponse("Add reward success!", rewardDto));

        }catch (Exception e){
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new ApiResponse(e.getMessage(), null));
        }
    }

    // GET Reward by ID
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getRewardById(@PathVariable Long id) {
        try{
            Reward reward = rewardService.getRewardById(id);
            RewardDto rewardDto = rewardService.convertToDto(reward);
            return ResponseEntity.ok(new ApiResponse("success",rewardDto));
        }catch (Exception e){
            return ResponseEntity.status(NOT_FOUND).body(new ApiResponse(e.getMessage(), null));
        }
    }

    // GET all Rewards
    @GetMapping
    public ResponseEntity<List<RewardDto>> getAllRewards() {
        List<Reward> rewards = rewardService.getAllRewards();
        List<RewardDto> rewardDtos = rewards.stream()
                .map(rewardService::convertToDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(rewardDtos);
    }

    // UPDATE an existing Reward
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateReward(@PathVariable Long id, @RequestBody RewardRequest rewardRequest) {
        try{
            Reward updatedReward = rewardService.updateReward(id, rewardRequest);
            RewardDto rewardDto = rewardService.convertToDto(updatedReward);
            return ResponseEntity.ok(new ApiResponse("Update reward success!",rewardDto));
        }catch (Exception e){
            return ResponseEntity.status(NOT_FOUND).body(new ApiResponse(e.getMessage(), null));
        }

    }

    // DELETE a Reward
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteReward(@PathVariable Long id) {
        try {
            rewardService.deleteReward(id);
            return ResponseEntity.ok(new ApiResponse("",null));
        }catch (Exception e){
            return ResponseEntity.status(NOT_FOUND).body(new ApiResponse(e.getMessage(), null));
        }

    }

    // Convert Reward to RewardDto
}
