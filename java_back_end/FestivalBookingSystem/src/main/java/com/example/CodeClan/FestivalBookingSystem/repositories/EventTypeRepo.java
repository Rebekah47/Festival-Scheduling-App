package com.example.CodeClan.FestivalBookingSystem.repositories;
import com.example.CodeClan.FestivalBookingSystem.models.EventType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventTypeRepo extends JpaRepository<EventType, Long> {
}
