package com.example.CodeClan.FestivalBookingSystem.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="speakers")
public class Speaker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="web_url")
    private String webUrl;

    @Column(name="headshot")
    private String headShot;

    @Column(name="acces_reqs")
    private String accessibilityRequirements;

    @JsonIgnoreProperties({"speakers"})
    @ManyToOne
    @JoinColumn(name="festival_id", nullable = false)
    private Festival festival;

    @JsonIgnoreProperties({"speakers"})
    @ManyToMany
    @JoinTable(
        joinColumns={@JoinColumn(name="speaker_id", nullable = false, updatable = false)},
        inverseJoinColumns={@JoinColumn(name="event_id", nullable = false, updatable = false)}
    )
    private List<Event> events;

    public Speaker(String name, String webUrl, String headShot, String accessibilityRequirements, Festival festival) {
        this.name = name;
        this.webUrl = webUrl;
        this.headShot = headShot;
        this.accessibilityRequirements = accessibilityRequirements;
        this.festival = festival;
        this.events = new ArrayList<Event>();
    }

    public Speaker() {
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

    public String getWebUrl() {
        return webUrl;
    }

    public void setWebUrl(String webUrl) {
        this.webUrl = webUrl;
    }

    public String getHeadShot() {
        return headShot;
    }

    public void setHeadShot(String headShot) {
        this.headShot = headShot;
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
