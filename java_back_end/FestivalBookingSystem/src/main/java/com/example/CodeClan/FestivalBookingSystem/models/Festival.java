package com.example.CodeClan.FestivalBookingSystem.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="festivals")
public class Festival {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="start_date")
    private LocalDate startDate;

    @Column(name="end_date")
    private LocalDate endDate;

    @JsonIgnoreProperties({"festival"})
    @OneToMany(mappedBy="festival", cascade=CascadeType.ALL)
    private List<Room> rooms;

//    @JsonIgnoreProperties({"festival"})
//    @OneToMany(mappedBy="festival", cascade=CascadeType.ALL)
//    private List<Speaker> speakers;
//
//    @JsonIgnoreProperties({"festival"})
//    @OneToMany(mappedBy="festival", cascade=CascadeType.ALL)
//    private List<Attendee> attendees;


    public Festival(String name, LocalDate startDate, LocalDate endDate) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.rooms = new ArrayList<Room>();
//        this.speakers = new ArrayList<Speaker>();
//        this.attendees = new ArrayList<Attendee>();
    }

    public Festival() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }


//    public List<Speaker> getSpeakers() {
//        return speakers;
//    }
//
//    public void setSpeakers(List<Speaker> speakers) {
//        this.speakers = speakers;
//    }
//
//    public List<Attendee> getAttendees() {
//        return attendees;
//    }
//
//    public void setAttendees(List<Attendee> attendees) {
//        this.attendees = attendees;
//    }
}


