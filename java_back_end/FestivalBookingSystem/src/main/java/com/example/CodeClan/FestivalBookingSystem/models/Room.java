package com.example.CodeClan.FestivalBookingSystem.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;

public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private ArrayList<Film> films;
    private ArrayList<Discussion> discussions;
    private ArrayList<Lecture> lectures;
    private int capacity;
}
