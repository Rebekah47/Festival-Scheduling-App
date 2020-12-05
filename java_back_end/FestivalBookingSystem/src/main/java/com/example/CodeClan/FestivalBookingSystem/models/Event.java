package com.example.CodeClan.FestivalBookingSystem.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="startTime")
    private LocalDateTime startTime;

    @Column(name="age_rating")
    private int ageRating;

    @Column(name="run_time")
    private int runTime;

    @JsonIgnoreProperties({"events"})
    @ManyToOne
    @JoinColumn(name="room_id", nullable = false)
    private Room room;

    @JsonIgnoreProperties({"events"})
    @ManyToOne
    @JoinColumn(name="eventType_id", nullable = false)
    private EventType eventType;

    @JsonIgnoreProperties({"events"})
    @ManyToMany
    @JoinTable(
        name="attendees_events",
        joinColumns={@JoinColumn(name="event_id", nullable = false, updatable = false)},
        inverseJoinColumns={@JoinColumn(name="attendee_id", nullable = false, updatable = false)}
    )
    private List<Attendee> attendees;

    @JsonIgnoreProperties({"events"})
    @ManyToMany
    @JoinTable(
        name="speakers_events",
        joinColumns={@JoinColumn(name="event_id", nullable = false, updatable = false)},
        inverseJoinColumns={@JoinColumn(name="speaker_id", nullable = false, updatable = false)}
    )
    private List<Speaker> speakers;

    public Event(String name, LocalDateTime startTime, Room room, EventType eventType, int ageRating, int runTime) {
        this.name = name;
        this.startTime = startTime;
        this.ageRating = ageRating;
        this.runTime = runTime;
        this.room = room;
        this.eventType = eventType;
        this.attendees = new ArrayList<Attendee>();
        this.speakers = new ArrayList<Speaker>();
    }

    public Event() {
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

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public List<Attendee> getAttendees() {
        return attendees;
    }

    public void setAttendees(List<Attendee> attendees) {
        this.attendees = attendees;
    }

    public List<Speaker> getSpeakers() {
        return speakers;
    }

    public void setSpeakers(List<Speaker> speakers) {
        this.speakers = speakers;
    }

    public void addAttendee(Attendee attendee){
        this.attendees.add(attendee);
    }

    public void addSpeaker(Speaker speaker){
        this.speakers.add(speaker);
    }

    public EventType getEventType() {
        return eventType;
    }

    public void setEventType(EventType eventType) {
        this.eventType = eventType;
    }

    public int getAgeRating() {
        return ageRating;
    }

    public void setAgeRating(int ageRating) {
        this.ageRating = ageRating;
    }

    public int getRunTime() {
        return runTime;
    }

    public void setRunTime(int runTime) {
        this.runTime = runTime;
    }
}
