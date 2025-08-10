import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import EventCard from '../components/EventCard';

const events = [];

function Events()
{
    return(
        <>
        <Navbar></Navbar>
        <Filter></Filter>
        {
            events.map((event, index) => (
                <EventCard></EventCard>
            ))
        }
        
        </>
    );
}
export default Events;