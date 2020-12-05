package com.example.CodeClan.FestivalBookingSystem.controllers;

import com.example.CodeClan.FestivalBookingSystem.models.Discussion;
import com.example.CodeClan.FestivalBookingSystem.repositories.DiscussionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DiscussionController {

  @Autowired
  DiscussionRepo discussionRepo;

  @GetMapping(value="/discussions")
  public ResponseEntity<List<Discussion>> getDiscussions(){ return new ResponseEntity<>(discussionRepo.findAll(), HttpStatus.OK); }

  @GetMapping(value="discussions/{id}")
  public ResponseEntity getDiscussion(@PathVariable Long id){ return new ResponseEntity(discussionRepo.findById(id), HttpStatus.OK); }

  @PostMapping(value="/discussions")
  public ResponseEntity<Discussion> postDiscussion(@RequestBody Discussion discussion){
    discussionRepo.save(discussion);
    return new ResponseEntity<>(discussion, HttpStatus.CREATED);
  }



}
