package com.example.CodeClan.FestivalBookingSystem.controllers;

import com.example.CodeClan.FestivalBookingSystem.models.EventType;
import com.example.CodeClan.FestivalBookingSystem.models.Room;
import com.example.CodeClan.FestivalBookingSystem.repositories.RoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RoomController {

  @Autowired
  RoomRepo roomRepo;

  @GetMapping(value="/rooms")
  public ResponseEntity<List<Room>> getRooms(){ return new ResponseEntity<>(roomRepo.findAll(), HttpStatus.OK); }

  @GetMapping(value = "/rooms/{id}")
  public ResponseEntity getRoom(@PathVariable Long id){ return new ResponseEntity(roomRepo.findById(id), HttpStatus.OK); }

  @GetMapping(value="/festivals/{id}/rooms")
  public ResponseEntity<List<Room>> getRooms(@PathVariable Long id){ return new ResponseEntity<>(roomRepo.findRoomsByFestivalId(id), HttpStatus.OK); }

  @PatchMapping(value = "/rooms/{id}")
  public ResponseEntity<Room> updateRoom(@RequestBody Room room){
    roomRepo.save(room);
    return new ResponseEntity<>(room, HttpStatus.OK);
  }

  @PostMapping(value = "/rooms")
  public ResponseEntity<Room> postPirate(@RequestBody Room room){
    roomRepo.save(room);
    return new ResponseEntity<>(room, HttpStatus.CREATED);
  }
}
