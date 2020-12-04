package com.example.CodeClan.FestivalBookingSystem.models;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name="lectures")
public class Lecture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long date;
    private Long startTime;
    private int runTime;
    private Festival festival;
    private Room room;
    private ArrayList<Attendee> attendees;
    private Speaker speaker;
}
