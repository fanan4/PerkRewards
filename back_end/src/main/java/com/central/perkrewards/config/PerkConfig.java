package com.central.perkrewards.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PerkConfig {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
