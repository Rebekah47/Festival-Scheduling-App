package com.example.CodeClan.FestivalBookingSystem.models;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;

@Entity
@Table(name="events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Festival festival;
    private Room room;
    private List<Speaker>();
    private List<Attendee>();
    private Film film;
    private Lecture lecture;
    private Discussion discussion;
    private LocalDateTime time;
    //temporal thing

}
