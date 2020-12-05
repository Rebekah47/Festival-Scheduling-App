package com.example.CodeClan.FestivalBookingSystem.controllers;

import com.example.CodeClan.FestivalBookingSystem.models.Attendee;
import com.example.CodeClan.FestivalBookingSystem.models.Festival;
import com.example.CodeClan.FestivalBookingSystem.models.Speaker;
import com.example.CodeClan.FestivalBookingSystem.repositories.AttendeeRepo;
import com.example.CodeClan.FestivalBookingSystem.repositories.FestivalRepo;
import com.example.CodeClan.FestivalBookingSystem.repositories.SpeakerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FestivalController {

  @Autowired
  FestivalRepo festivalRepo;

  @Autowired
  SpeakerRepo speakerRepo;

  @Autowired
  AttendeeRepo attendeeRepo;

  @GetMapping(value="/festivals")
  public ResponseEntity<List<Festival>> getFestivals(){ return new ResponseEntity<>(festivalRepo.findAll(), HttpStatus.OK); }

  @GetMapping(value="/festivals/{id}/speakers")
  public ResponseEntity<List<Speaker>> getSpeakersForFestival(@PathVariable Long id){
    return new ResponseEntity<>(speakerRepo.findDistinctSpeakersByEventsRoomFestivalId(id), HttpStatus.OK);
  }

  @GetMapping(value="/festivals/{id}/attendees")
  public ResponseEntity<List<Attendee>> getAttendeesForFestival(@PathVariable Long id){
    return new ResponseEntity<>(attendeeRepo.findDistinctAttendeesByEventsRoomFestivalId(id), HttpStatus.OK);
  }
}
