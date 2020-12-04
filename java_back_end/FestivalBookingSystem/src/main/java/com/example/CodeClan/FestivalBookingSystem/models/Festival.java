package com.example.CodeClan.FestivalBookingSystem.models;

import javax.persistence.*;
import java.awt.*;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Table(name="festivals")
public class Festival {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalDate startDate;
    private Period numOfDays;
    private List<Speaker>();
    private List<Attendee>();
    private List<Room>();

}


