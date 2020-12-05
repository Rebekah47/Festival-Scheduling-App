package com.example.CodeClan.FestivalBookingSystem.repositories;

import com.example.CodeClan.FestivalBookingSystem.models.Festival;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FestivalRepo extends JpaRepository<Festival, Long> {
}
