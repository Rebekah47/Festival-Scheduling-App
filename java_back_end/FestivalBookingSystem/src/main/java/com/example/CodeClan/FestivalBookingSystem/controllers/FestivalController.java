package com.example.CodeClan.FestivalBookingSystem.controllers;

import com.example.CodeClan.FestivalBookingSystem.models.Festival;
import com.example.CodeClan.FestivalBookingSystem.repositories.FestivalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FestivalController {

  @Autowired
  FestivalRepo festivalRepo;

  @GetMapping(value="/festivals")
  public ResponseEntity<List<Festival>> getFestivals(){ return new ResponseEntity<>(festivalRepo.findAll(), HttpStatus.OK); }

}
