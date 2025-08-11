import { useNavigate } from "react-router-dom";
import Filter from "../components/Filter";
import EventCard from "../components/EventCard";
import Banner from "../components/Banner";
import "../styles/Events.css";

const Events = () => {
  const navigate = useNavigate();

  const eventsData = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRctGbRNi6ZaFG9Mx1lkb6lLqAnJjoOz4Lcw&s",
      category: "Music",
      title: "Summer Beats Festival",
      description:
        "An electrifying music experience with top DJs and bands performing live under the stars.",
      date: "Aug 25, 2025",
      time: "6:00 PM - 11:00 PM",
      location: "Central Park, NY",
      organizer: "NYC Events Co.",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczYnfyPBFS5giA9Abj9wYRmnFtQm1e0Hryg&s",
      category: "Technology",
      title: "Tech Innovators Summit",
      description:
        "Join leading innovators and entrepreneurs to discuss the future of technology.",
      date: "Sep 10, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Silicon Valley, CA",
      organizer: "InnovateX",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQ8PsJLs2aks_zs6tsC6soH5M3pGfBCOHNw&s",
      category: "Food",
      title: "Global Flavors Food Fest",
      description:
        "Taste and enjoy dishes from around the world in one place with live cooking shows.",
      date: "Oct 2, 2025",
      time: "11:00 AM - 9:00 PM",
      location: "Downtown LA, CA",
      organizer: "Foodies United",
    },
  ];

  return (
    <div className="events-page">
      <Banner
        title="Upcoming Events"
        description="Explore the latest events happening near you!"
      />
      <Filter />

      <div className="events-list">
        {eventsData.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            category={event.category}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            location={event.location}
            organizer={event.organizer}
            onRegister={() => alert(`Registering for ${event.title}`)}
            onSave={() => alert(`Saved ${event.title}`)}
            onDetails={() =>
              navigate(`/event/${encodeURIComponent(event.title)}`, {
                state: { event },
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
