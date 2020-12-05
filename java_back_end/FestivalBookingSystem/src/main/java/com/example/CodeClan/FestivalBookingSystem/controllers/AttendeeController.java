package com.example.CodeClan.FestivalBookingSystem.controllers;
import com.example.CodeClan.FestivalBookingSystem.models.Attendee;
import com.example.CodeClan.FestivalBookingSystem.repositories.AttendeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;
public class AttendeeController {
    @Autowired
    AttendeeRepo attendeeRepo;
    @GetMapping(value="/attendees")
    public ResponseEntity<List<Attendee>> getAttendees(){ return new ResponseEntity<>(attendeeRepo.findAll(), HttpStatus.OK); }
    @PostMapping(value="/attendees")
    public ResponseEntity<Attendee> postAttendee(@RequestBody Attendee attendee){
        attendeeRepo.save(attendee);
        return new ResponseEntity<>(attendee, HttpStatus.CREATED);
    }
}
