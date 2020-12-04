package com.example.CodeClan.FestivalBookingSystem.models;

import javax.persistence.*;

@Entity
@Table(name="festivals")
public class Festival {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
