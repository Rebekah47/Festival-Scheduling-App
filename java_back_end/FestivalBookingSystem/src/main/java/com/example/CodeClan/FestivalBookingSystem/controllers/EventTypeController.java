package com.example.CodeClan.FestivalBookingSystem.controllers;

import com.example.CodeClan.FestivalBookingSystem.models.EventType;
import com.example.CodeClan.FestivalBookingSystem.repositories.EventTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EventTypeController {

  @Autowired
  EventTypeRepo eventTypeRepo;

  @GetMapping(value="/eventTypes")
  public ResponseEntity<List<EventType>> getEventTypes(){ return new ResponseEntity<>(eventTypeRepo.findAll(), HttpStatus.OK); }
}
