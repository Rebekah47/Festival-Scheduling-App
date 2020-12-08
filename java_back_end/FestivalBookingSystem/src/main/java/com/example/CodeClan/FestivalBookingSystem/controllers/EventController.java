package com.example.CodeClan.FestivalBookingSystem.controllers;
import com.example.CodeClan.FestivalBookingSystem.models.Event;
import com.example.CodeClan.FestivalBookingSystem.repositories.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class EventController {
    @Autowired
    EventRepo eventRepo;
    @GetMapping("/events")
    public ResponseEntity<List<Event>> getAllEvents(){
        return new ResponseEntity<>(eventRepo.findAll(), HttpStatus.OK);
    }
    @GetMapping(value = "/events/{id}")
    public ResponseEntity getEvent(@PathVariable Long id){
        return new ResponseEntity<>(eventRepo.findById(id), HttpStatus.OK);
    }
    @PostMapping(value = "/events")
    public ResponseEntity<Event> postEvent(@RequestBody Event event){
        eventRepo.save(event);
        return new ResponseEntity<>(event, HttpStatus.CREATED);
    }
    @PatchMapping(value = "/events/{id}")
    public ResponseEntity<Event> updateEvent(@RequestBody Event event){
        eventRepo.save(event);
        return new ResponseEntity<>(event, HttpStatus.OK);
    }
    @DeleteMapping(value = "/events/{id}")
    public ResponseEntity<Event> deleteEvent(@PathVariable Long id) {
        Event found = eventRepo.getOne(id);
        eventRepo.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
