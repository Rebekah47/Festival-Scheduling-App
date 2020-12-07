package com.example.CodeClan.FestivalBookingSystem.controllers;
import com.example.CodeClan.FestivalBookingSystem.models.Speaker;
import com.example.CodeClan.FestivalBookingSystem.repositories.SpeakerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
public class SpeakerController {
    @Autowired
    SpeakerRepo speakerRepo;

    @GetMapping("/speakers")
    public ResponseEntity<List<Speaker>> getAllSpeakers(){
        return new ResponseEntity<>(speakerRepo.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/speakers/{id}")
    public ResponseEntity getEvent(@PathVariable Long id){
        return new ResponseEntity<>(speakerRepo.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/speakers")
    public ResponseEntity<Speaker> postSpeaker(@RequestBody Speaker speaker){
        speakerRepo.save(speaker);
        return new ResponseEntity<>(speaker, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/speakers/{id}")
    public ResponseEntity<Speaker> updateSpeaker(@RequestBody Speaker speaker){
        speakerRepo.save(speaker);
        return new ResponseEntity<>(speaker, HttpStatus.OK);
    }

    @DeleteMapping(value = "/speakers/{id}")
    public ResponseEntity<Speaker> deleteEvent(@PathVariable Long id) {
        Speaker found = speakerRepo.getOne(id);
        speakerRepo.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
