package com.example.CodeClan.FestivalBookingSystem.repositories;

import com.example.CodeClan.FestivalBookingSystem.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepo extends JpaRepository<Room, Long> {
}
