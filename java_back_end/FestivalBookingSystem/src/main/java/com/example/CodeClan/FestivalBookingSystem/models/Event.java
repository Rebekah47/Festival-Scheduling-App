package com.example.CodeClan.FestivalBookingSystem.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSetter;

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

    @JsonIgnoreProperties({"events"})
    @ManyToOne
    @JoinColumn(name="room_id", nullable = false)
    private Room room;

    @JsonIgnoreProperties({"events"})
    @ManyToOne
    @JoinColumn(name="film_id")
    private Film film;

    @JsonIgnoreProperties({"events"})
    @ManyToOne
    @JoinColumn(name="lecture_id")
    private Lecture lecture;

    @JsonIgnoreProperties({"events"})
    @ManyToOne
    @JoinColumn(name="discussion_id")
    private Discussion discussion;

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


    public Event(String name, LocalDateTime startTime, Room room, Film film, Discussion discussion, Lecture lecture) {
        this.name = name;
        this.startTime = startTime;
        this.room = room;
        this.film = film;
        this.discussion = discussion;
        this.lecture = lecture;
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

    public Film getFilm() {
        return film;
    }

    public void setFilm(Film film) {
        this.film = film;
    }

    public Lecture getLecture() {
        return lecture;
    }

    public void setLecture(Lecture lecture) {
        this.lecture = lecture;
    }

    public Discussion getDiscussion() {
        return discussion;
    }

    public void setDiscussion(Discussion discussion) {
        this.discussion = discussion;
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

}
