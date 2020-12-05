package com.example.CodeClan.FestivalBookingSystem.repositories;

import com.example.CodeClan.FestivalBookingSystem.models.Speaker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SpeakerRepo extends JpaRepository<Speaker, Long> {

  List<Speaker> findDistinctSpeakersByEventsRoomFestivalId(Long id);
}
