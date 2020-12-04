package com.example.CodeClan.FestivalBookingSystem.models;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name="speakers")
public class Speaker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String webUrl;
    private String headShot;
    private List<Discussion>();
    private List<Lecture>();
    private String accessibilityRequirements;
}
