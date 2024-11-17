package com.central.perkrewards.model;

import com.central.perkrewards.enums.Role;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.NaturalId;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @NaturalId
    private String email;
    @Column(nullable = false)
    private int loyalty_points=0;
    @Column(nullable = false)
    private Role role;


}
