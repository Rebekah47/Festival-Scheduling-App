package com.example.CodeClan.FestivalBookingSystem.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="capacity")
    private int capacity;

    @JsonIgnoreProperties({"room"})
    @OneToMany(mappedBy="room")
    private List<Event> events;

    @JsonIgnoreProperties({"rooms"})
    @ManyToOne
    @JoinColumn(name="festival_id", nullable = false)
    private Festival festival;


    public Room(String name, int capacity, Festival festival) {
        this.name = name;
        this.capacity = capacity;
        this.events = new ArrayList<Event>();
        this.festival = festival;
    }

    public Room() {
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

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }


    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    public Festival getFestival() {
        return festival;
    }

    public void setFestival(Festival festival) {
        this.festival = festival;
    }

}
