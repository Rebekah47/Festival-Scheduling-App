package com.example.CodeClan.FestivalBookingSystem.repositories;

import com.example.CodeClan.FestivalBookingSystem.models.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttendeeRepo extends JpaRepository<Attendee, Long> {

  List<Attendee> findDistinctAttendeesByEventsRoomFestivalId(Long id);

}
