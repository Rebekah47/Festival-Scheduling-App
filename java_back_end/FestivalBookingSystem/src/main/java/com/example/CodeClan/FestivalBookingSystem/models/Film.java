//package com.example.CodeClan.FestivalBookingSystem.models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Table(name="films")
//public class Film {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name="name")
//    private String name;
//
//    @Column(name="age_rating")
//    private int ageRating;
//
//    @Column(name="run_time")
//    private int runTime;
//
//    @JsonIgnoreProperties({"film"})
//    @OneToMany(mappedBy="film")
//    private List<Event> events;
//
//    public Film(String name, int ageRating, int runTime) {
//        this.name = name;
//        this.ageRating = ageRating;
//        this.runTime = runTime;
//        this.events = new ArrayList<Event>();
//    }
//
//    public Film() {
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public int getAgeRating() {
//        return ageRating;
//    }
//
//    public void setAgeRating(int ageRating) {
//        this.ageRating = ageRating;
//    }
//
//    public int getRunTime() {
//        return runTime;
//    }
//
//    public void setRunTime(int runTime) {
//        this.runTime = runTime;
//    }
//
//    public List<Event> getEvents() {
//        return events;
//    }
//
//    public void setEvents(List<Event> events) {
//        this.events = events;
//    }
//}
