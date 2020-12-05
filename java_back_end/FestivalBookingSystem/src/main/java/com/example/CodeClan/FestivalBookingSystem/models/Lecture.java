//package com.example.CodeClan.FestivalBookingSystem.models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Table(name="lectures")
//public class Lecture {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name="name")
//    private String name;
//
//    @Column(name="run_time")
//    private int runTime;
//
//    @JsonIgnoreProperties({"lecture"})
//    @OneToMany(mappedBy="lecture")
//    private List<Event> events;
//
//    public Lecture(String name, int runTime) {
//        this.name = name;
//        this.runTime = runTime;
//        this.events = new ArrayList<Event>();
//    }
//
//    public Lecture() {
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
