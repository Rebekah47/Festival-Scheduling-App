package com.example.CodeClan.FestivalBookingSystem.controllers;
import com.example.CodeClan.FestivalBookingSystem.models.Event;
import com.example.CodeClan.FestivalBookingSystem.repositories.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;
public class EventController {
    @Autowired
    EventRepo eventRepo;
    @GetMapping(value="/events")
    public ResponseEntity<List<Event>> getEvents(){ return new ResponseEntity<>(eventRepo.findAll(), HttpStatus.OK); }
    @PostMapping(value="/events")
    public ResponseEntity<Event> postEvent(@RequestBody Event event){
        eventRepo.save(event);
        return new ResponseEntity<>(event, HttpStatus.CREATED);
    }
}
