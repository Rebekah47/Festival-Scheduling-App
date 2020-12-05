package com.example.CodeClan.FestivalBookingSystem;

import com.example.CodeClan.FestivalBookingSystem.models.*;
import com.example.CodeClan.FestivalBookingSystem.repositories.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class FestivalBookingSystemApplicationTests {

	@Autowired
	FestivalRepo festivalRepo;

	@Autowired
	RoomRepo roomRepo;

	@Autowired
	SpeakerRepo speakerRepo;

	@Autowired
	AttendeeRepo attendeeRepo;

//	@Autowired
//	DiscussionRepo discussionRepo;
//
//	@Autowired
//	FilmRepo filmRepo;
//
//	@Autowired
//	LectureRepo lectureRepo;

	@Autowired
	EventRepo eventRepo;

	@Test
	void contextLoads() {
	}

//	@Test
//	public void addThings(){
//		LocalDate localDate = LocalDate.of(2020, 12, 4);
//		Festival festival = new Festival("test festival", localDate, 5);
//		festivalRepo.save(festival);
//
//		Room room = new Room("test room", 5, festival);
//		roomRepo.save(room);
//
//		Speaker speaker = new Speaker("test_speaker", "test_url", "test_headshot", "test requirements");//, festival);
//		speakerRepo.save(speaker);
//
//		Attendee attendee = new Attendee("test_attendee", 0, "test requirement");//, festival);
//		attendeeRepo.save(attendee);
//
//		Discussion discussion = new Discussion("test_discussion", 120);
//		discussionRepo.save(discussion);
//
//		Lecture lecture = new Lecture("test_lecture", 120);
//		lectureRepo.save(lecture);
//
//		Film film = new Film("test_film", 18, 120);
//		filmRepo.save(film);
//
//		Lecture lecture2 = new Lecture("", 0);
//		lectureRepo.save(lecture2);
//		Discussion discussion2 = new Discussion("", 0);
//		discussionRepo.save(discussion2);
//
//		LocalDateTime localDateTime = LocalDateTime.of(2020, 12, 4, 14, 30);
//		Event event = new Event("test_event", localDateTime, room, film, discussion2, lecture2);
//		eventRepo.save(event);
//
//		event.addAttendee(attendee);
//		event.addSpeaker(speaker);
//		eventRepo.save(event);
//
//
//	}

	@Test
	public void canGetUniqueSpeakers(){
		List<Speaker> speakers = speakerRepo.findDistinctSpeakersByEventsRoomFestivalId(1L);
		assertEquals(6, speakers.size());
	}

	@Test
	public void canGetUniqueAttendees(){
		List<Attendee> attendees = attendeeRepo.findDistinctAttendeesByEventsRoomFestivalId(1L);
		assertEquals(6, attendees.size());
	}

}
