package com.example.CodeClan.FestivalBookingSystem.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="attendees")
public class Attendee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="age")
    private int age;

    @Column(name="access_reqs")
    private String accessibilityRequirements;

    @JsonIgnoreProperties({"attendees"})
    @ManyToOne
    @JoinColumn(name="festival_id", nullable = false)
    private Festival festival;

    @JsonIgnoreProperties({"attendees"})
    @ManyToMany
    @JoinTable(
        joinColumns={@JoinColumn(name="attendee_id", nullable = false, updatable = false)},
        inverseJoinColumns={@JoinColumn(name="event_id", nullable = false, updatable = false)}
    )
    private List<Event> events;


    public Attendee(String name, int age, String accessibilityRequirements, Festival festival) {
        this.name = name;
        this.age = age;
        this.accessibilityRequirements = accessibilityRequirements;
        this.festival = festival;
        this.events = new ArrayList<Event>();
    }

    public Attendee() {
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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAccessibilityRequirements() {
        return accessibilityRequirements;
    }

    public void setAccessibilityRequirements(String accessibilityRequirements) {
        this.accessibilityRequirements = accessibilityRequirements;
    }

    public Festival getFestival() {
        return festival;
    }

    public void setFestival(Festival festival) {
        this.festival = festival;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    public void addEvent(Event event){
        this.events.add(event);
    }

}
