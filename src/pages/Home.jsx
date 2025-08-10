import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import '../styles/Home.css';
import JoinCommunity from '../components/JoinCommunity'
import FeatureCard from '../components/FeatureCard';
import { FaLaptopCode, FaChalkboardTeacher, FaProjectDiagram, FaCertificate } from "react-icons/fa";

const features = [
  {
    icon: FaLaptopCode,
    title: "Hands-on Labs",
    description: "Practice networking with real hardware and simulators."
  },
  {
    icon: FaChalkboardTeacher,
    title: "Expert Mentorship",
    description: "Learn from certified instructors with industry experience."
  },
  {
    icon: FaProjectDiagram,
    title: "Real-World Projects",
    description: "Work on industry-level projects and boost your portfolio."
  },
  {
    icon: FaCertificate,
    title: "Global Certification",
    description: "Earn Cisco-recognized certificates to advance your career."
  }
];


function Home()
{
    return(<>
    
    <Hero></Hero>

    {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Our Academy Features</h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
      <JoinCommunity></JoinCommunity>
    
    </>);
}
export default Home;