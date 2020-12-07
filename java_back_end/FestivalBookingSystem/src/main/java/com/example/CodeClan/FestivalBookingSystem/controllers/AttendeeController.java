package com.example.CodeClan.FestivalBookingSystem.controllers;
import com.example.CodeClan.FestivalBookingSystem.models.Attendee;
import com.example.CodeClan.FestivalBookingSystem.repositories.AttendeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AttendeeController {

    @Autowired
    AttendeeRepo attendeeRepo;

    @GetMapping("/attendees")
    public ResponseEntity<List<Attendee>> getAllAttendees(){
        return new ResponseEntity<>(attendeeRepo.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/attendees/{id}")
    public ResponseEntity getAttendee(@PathVariable Long id){
        return new ResponseEntity<>(attendeeRepo.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/attendees")
    public ResponseEntity<Attendee> postPirate(@RequestBody Attendee attendee){
        attendeeRepo.save(attendee);
        return new ResponseEntity<>(attendee, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/attendees/{id}")
    public ResponseEntity<Attendee> updatePirate(@RequestBody Attendee attendee){
        attendeeRepo.save(attendee);
        return new ResponseEntity<>(attendee, HttpStatus.OK);
    }

    @DeleteMapping(value = "/attendees/{id}")
    public ResponseEntity<Attendee> deletePirate(@PathVariable Long id) {
        Attendee found = attendeeRepo.getOne(id);
        attendeeRepo.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
