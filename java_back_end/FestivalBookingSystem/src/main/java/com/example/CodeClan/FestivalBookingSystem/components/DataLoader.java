package com.example.CodeClan.FestivalBookingSystem.components;

import com.example.CodeClan.FestivalBookingSystem.models.*;
import com.example.CodeClan.FestivalBookingSystem.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
public class DataLoader implements ApplicationRunner {

  @Autowired
  FestivalRepo festivalRepo;

  @Autowired
  RoomRepo roomRepo;

  @Autowired
  SpeakerRepo speakerRepo;

  @Autowired
  AttendeeRepo attendeeRepo;

  @Autowired
  DiscussionRepo discussionRepo;

  @Autowired
  FilmRepo filmRepo;

  @Autowired
  LectureRepo lectureRepo;

  @Autowired
  EventRepo eventRepo;

  @Autowired
  EventTypeRepo eventTypeRepo;

  public DataLoader(){}

  public void run(ApplicationArguments args){

    LocalDate localDate1 = LocalDate.of(2020, 9, 17);
    LocalDate localDate2 = LocalDate.of(2020, 12, 4);

    LocalDateTime localDateTime1 = LocalDateTime.of(2020, 9, 17, 12, 30);
    LocalDateTime localDateTime2 = LocalDateTime.of(2020, 9, 17, 16, 30);
    LocalDateTime localDateTime3 = LocalDateTime.of(2020, 9, 17, 20, 30);
    LocalDateTime localDateTime4 = LocalDateTime.of(2020, 9, 18, 10, 30);
    LocalDateTime localDateTime5 = LocalDateTime.of(2020, 9, 18, 12, 0);
    LocalDateTime localDateTime6 = LocalDateTime.of(2020, 12, 4, 14, 30);
    LocalDateTime localDateTime7 = LocalDateTime.of(2020, 12, 4, 17, 0);
    LocalDateTime localDateTime8 = LocalDateTime.of(2020, 12, 5, 10, 30);
    LocalDateTime localDateTime9 = LocalDateTime.of(2020, 12, 5, 11, 30);
    LocalDateTime localDateTime10 = LocalDateTime.of(2020, 9, 17, 0, 00);
    LocalDateTime localDateTime11 = LocalDateTime.of(2020, 12, 4, 0, 00);


    Festival lotr = new Festival("Lord of the Rings", localDate1, 2);
    festivalRepo.save(lotr);
    Festival marvel = new Festival("Marvel Cinematic Universe", localDate2, 5);
    festivalRepo.save(marvel);

    Room One = new Room("Main Theatre", 60, lotr);
    roomRepo.save(One);
    Room Two = new Room("Pop Up", 20, lotr);
    roomRepo.save(Two);
    Room Three = new Room("Main Auditorium", 350, lotr);
    roomRepo.save(Three);


    Speaker speaker1 = new Speaker("Ian McKellen", "test_url", "test_headshot", "test requirements");
    speakerRepo.save(speaker1);
    Speaker speaker2 = new Speaker("Viggo Mortensen", "test_url", "test_headshot", "test requirements");
    speakerRepo.save(speaker2);
    Speaker speaker3 = new Speaker("Peter Jackson", "test_url", "test_headshot", "test requirements");
    speakerRepo.save(speaker3);
    Speaker speaker4 = new Speaker("Elijah Wood", "test_url", "test_headshot", "test requirements");
    speakerRepo.save(speaker4);
    Speaker speaker5 = new Speaker("Orlando Bloom", "test_url", "test_headshot", "test requirements");
    speakerRepo.save(speaker5);
    Speaker speaker6 = new Speaker("Jim Rygiel", "test_url", "test_headshot", "test requirements");
    speakerRepo.save(speaker6);
    Speaker speaker7 = new Speaker("Taika Waititi", "test_url", "test_headshot", "test requirements");
    speakerRepo.save(speaker7);
    Speaker speaker8 = new Speaker("Robert Downey Jr", "test_url", "test_headshot", "test requirements");
    speakerRepo.save(speaker8);
    Speaker speaker9 = new Speaker("Jon Favreau", "test_url", "test_headshot", "test requirements");
    speakerRepo.save(speaker9);

    Attendee attendee1 = new Attendee("John Smith", 52, "test requirement");
    attendeeRepo.save(attendee1);
    Attendee attendee2 = new Attendee("Jay Gatsby ", 31, "test requirement");
    attendeeRepo.save(attendee2);
    Attendee attendee3 = new Attendee("Edith Gray", 64, "test requirement");
    attendeeRepo.save(attendee3);
    Attendee attendee4 = new Attendee("Evie Fairchild", 17, "test requirement");
    attendeeRepo.save(attendee4);
    Attendee attendee5 = new Attendee("James Right", 47, "test requirement");
    attendeeRepo.save(attendee5);
    Attendee attendee6 = new Attendee("Alisson Byre", 33, "test requirement");
    attendeeRepo.save(attendee6);
    Attendee attendee7 = new Attendee("Alastair Jacques", 37, "test requirement");
    attendeeRepo.save(attendee7);
    Attendee attendee8 = new Attendee("Murray Morrison", 51, "test requirement");
    attendeeRepo.save(attendee8);

    EventType film = new EventType("Film");
    eventTypeRepo.save(film);
    EventType lecture = new EventType("Lecture");
    eventTypeRepo.save(lecture);
    EventType discussion = new EventType("Discussion");
    eventTypeRepo.save(discussion);

    Event event1 = new Event("How it all started", localDateTime4, One, film, 0, 160 );
    eventRepo.save(event1);
    Event event2 = new Event("How it all started", localDateTime5, Two, lecture, 18, 60);
    eventRepo.save(event2);
    Event event3 = new Event("Trilogy 1", localDateTime1, Three,discussion, 18, 120 );
    eventRepo.save(event3);
    Event event4 = new Event("Trilogy 2", localDateTime2, One, film, 0, 160 );
    eventRepo.save(event4);
    Event event5 = new Event("Trilogy 3", localDateTime3, Two, lecture, 18, 60);
    eventRepo.save(event5);
    Event event6 = new Event("How its made", localDateTime2, Three, discussion, 18, 120 );
    eventRepo.save(event6);
    Event blankEventLotr = new Event("All Guests and speakers", localDateTime10, One, film, 0, 160 );
    eventRepo.save(blankEventLotr);
    Event event7 = new Event("Ragnarok before Speech", localDateTime6, Two, lecture, 18, 60);
    eventRepo.save(event7);
    Event event8 = new Event("Iron Man before Q&A", localDateTime7, Three, discussion, 18, 120 );
    eventRepo.save(event8);
    Event event9 = new Event("Q&A Iron Man", localDateTime8, One, film, 0, 160 );
    eventRepo.save(event9);
    Event event10 = new Event("Do you know who Taika Waititi is?", localDateTime9, Two , film, 0, 160 );
    eventRepo.save(event10);
    Event blankEventMarvel = new Event("All Guests and speakers", localDateTime11, Three, discussion, 18, 120 );
    eventRepo.save(blankEventMarvel);

    blankEventLotr.addAttendee(attendee1);
    blankEventLotr.addAttendee(attendee2);
    blankEventLotr.addAttendee(attendee3);
    blankEventLotr.addAttendee(attendee4);
    blankEventLotr.addAttendee(attendee5);
    blankEventLotr.addAttendee(attendee6);
    blankEventLotr.addSpeaker(speaker1);
    blankEventLotr.addSpeaker(speaker2);
    blankEventLotr.addSpeaker(speaker3);
    blankEventLotr.addSpeaker(speaker4);
    blankEventLotr.addSpeaker(speaker5);
    blankEventLotr.addSpeaker(speaker6);
    eventRepo.save(blankEventLotr);

    blankEventMarvel.addAttendee(attendee7);
    blankEventMarvel.addAttendee(attendee8);
    blankEventMarvel.addSpeaker(speaker7);
    blankEventMarvel.addSpeaker(speaker8);
    blankEventMarvel.addSpeaker(speaker9);
    eventRepo.save(blankEventMarvel);

    event1.addSpeaker(speaker1);
    event1.addSpeaker(speaker2);
    event1.addSpeaker(speaker3);
    event1.addSpeaker(speaker4);
    event1.addSpeaker(speaker5);
    eventRepo.save(event1);
    event2.addSpeaker(speaker1);
    event2.addSpeaker(speaker2);
    event2.addSpeaker(speaker3);
    event2.addSpeaker(speaker4);
    event2.addSpeaker(speaker5);
    eventRepo.save(event2);
    event6.addSpeaker(speaker6);
    eventRepo.save(event6);
    event9.addSpeaker(speaker8);
    event9.addSpeaker(speaker9);
    eventRepo.save(event9);
    event10.addSpeaker(speaker7);
    eventRepo.save(event10);

    attendee1.addEvent(event1);
    attendee1.addEvent(event2);
    attendee1.addEvent(event3);
    attendee1.addEvent(event4);
    attendee1.addEvent(event5);
    attendeeRepo.save(attendee1);
    attendee4.addEvent(event6);
    attendeeRepo.save(attendee4);
    attendee7.addEvent(event8);
    attendee7.addEvent(event9);
    attendeeRepo.save(attendee7);
    attendee8.addEvent(event7);
    attendee8.addEvent(event10);
    attendeeRepo.save(attendee8);


  }

}
