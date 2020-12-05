package com.example.CodeClan.FestivalBookingSystem.repositories;

import com.example.CodeClan.FestivalBookingSystem.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepo extends JpaRepository<Event, Long> {
}
