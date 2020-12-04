package com.example.CodeClan.FestivalBookingSystem.models;

import javax.persistence.*;
import java.awt.*;
import java.util.ArrayList;

@Entity
@Table(name="festivals")
public class Festival {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Long startDate;
    private int numOfDays;
    private ArrayList<Speaker> speakers;
    private ArrayList<Film> films;
    private ArrayList<Lecture> lectures;
    private ArrayList<Discussion> discussions;
    private ArrayList<Room> rooms;
    private ArrayList<Attendee> attendees;

}
