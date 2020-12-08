package com.example.CodeClan.FestivalBookingSystem.controllers;

import com.example.CodeClan.FestivalBookingSystem.models.*;
import com.example.CodeClan.FestivalBookingSystem.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class FestivalController {

  @Autowired
  FestivalRepo festivalRepo;

  @Autowired
  SpeakerRepo speakerRepo;

  @Autowired
  AttendeeRepo attendeeRepo;

  @Autowired
  RoomRepo roomRepo;

  @Autowired
  EventTypeRepo eventTypeRepo;

  @Autowired
  EventRepo eventRepo;

  @GetMapping(value="/festivals")
  public ResponseEntity<List<Festival>> getFestivals(){ return new ResponseEntity<>(festivalRepo.findAll(), HttpStatus.OK); }

  @GetMapping(value = "/festivals/{id}")
  public ResponseEntity getFestival(@PathVariable Long id){ return new ResponseEntity(festivalRepo.findById(id), HttpStatus.OK); }

  @GetMapping(value="/festivals/{id}/speakers")
  public ResponseEntity<List<Speaker>> getSpeakersForFestival(@PathVariable Long id){
    return new ResponseEntity<>(speakerRepo.findDistinctSpeakersByEventsRoomFestivalId(id), HttpStatus.OK);
  }

  @GetMapping(value="/festivals/{id}/attendees")
  public ResponseEntity<List<Attendee>> getAttendeesForFestival(@PathVariable Long id){
    return new ResponseEntity<>(attendeeRepo.findDistinctAttendeesByEventsRoomFestivalId(id), HttpStatus.OK);
  }

  @PatchMapping(value = "/festivals/{id}")
  public ResponseEntity<Festival> updateFestival(@RequestBody Festival festival){
    festivalRepo.save(festival);
    return new ResponseEntity<>(festival, HttpStatus.OK);
  }

  @PostMapping(value = "/festivals/{capacity}")
  public ResponseEntity<Festival> postFestival(@RequestBody Festival festival, @PathVariable int capacity){
    festivalRepo.save(festival);
    Room room = new Room("Attending", capacity, festival);
    roomRepo.save(room);
    EventType eventType = eventTypeRepo.findById(1L).get();
    LocalDateTime localDateTime = festival.getStartDate().atStartOfDay();
    Event event = new Event("Attending", localDateTime, room, eventType, 0, 0, "trailer" );
    eventRepo.save(event);

    return new ResponseEntity<>(festival, HttpStatus.CREATED);
  }


}
