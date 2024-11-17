package com.central.perkrewards.request;

import com.central.perkrewards.model.Category;
import jakarta.validation.constraints.NotNull;
import java.sql.Blob;

public record RewardRequest(
        @NotNull(message = "name is required")
         String name,
         String description,
        @NotNull(message = "points is required")
         int pointsRequired,
        @NotNull(message = "category is required")
        Category category,
         Blob image
) {
}
