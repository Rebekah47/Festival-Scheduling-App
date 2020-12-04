package com.example.CodeClan.FestivalBookingSystem.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.ArrayList;

public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private ArrayList<LocalDateTime> availability;
    private Long id;
    private String name;
    private List<Event>();
    private int capacity;
}
