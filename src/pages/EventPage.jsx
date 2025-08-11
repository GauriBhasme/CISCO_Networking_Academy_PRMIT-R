import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import EventRegistrationForm from "../components/EventRegistrationForm";
import "../styles/EventPage.css";

function handleRegistration(data) {
  console.log("Registration Successful!!", data);
}

function EventPage() {
  const { eventName } = useParams();
  const location = useLocation();
  const event = location.state?.event;

  if (!event) {
    return <h2>Event not found: {eventName}</h2>;
  }

  return (
    <div className="event-info">
      <Banner
        title={event.title}
        description={event.description}
        backgroundImage={event.image}
      />
      <div className="event-details">
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Organizer:</strong> {event.organizer}</p>
      </div>
      <EventRegistrationForm
        eventName={event.title}
        onSubmit={handleRegistration}
      />
    </div>
  );
}

export default EventPage;
