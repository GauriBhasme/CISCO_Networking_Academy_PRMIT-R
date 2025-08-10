
import "../styles/About.css";
import TeamMember from "../components/TeamMember";
import Banner from "../components/Banner"

// Simple reusable card component
const InfoCard = ({ title, description }) => (
    <div className="info-card">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

// Reusable Member Card
// const MemberCard = ({ name, role, image }) => (
//     <div className="member-card">
//         <img src={image} alt={name} />
//         <h4>{name}</h4>
//         <p>{role}</p>
//     </div>
// );

const faculty = [
    {
        name: 'C. N. Deshmukh',
        image: '/images/faculty_coordinators/C_N_Deshmukh_sir.jpeg',
        role: 'Faculty Coordinator'
    },
    {
        name: 'Arpit Chaudhary',
        image: '/images/faculty_coordinators/Arpit_sir.jpg',
        role: 'Faculty Coordinator'
    }]

const cores = [{
    name: 'Alice',
    image: '/images/core/core1.jpg'
},
{
    name: 'Bob',
    image: '/images/core/core2.jpeg'
},
{
    name: 'Diana',
    image: '/images/core/core3.jpeg'
}
    // {
    //     name:'Ethan',
    //     image:'/images/core/core4.jpg'
    // },
    // {
    //     name:'Fiona',
    //     image:'/images/core/core5.jpg'
    // }
]

const leads = [{
    name: 'George',
    image: "/images/lead/lead1.jpeg"
}, {
    name: 'Hannah',
    image: "/images/lead/lead2.jpeg"
}, {
    name: 'Kevin',
    image: "/images/lead/lead3.jpg"
}, {
    name: 'Lily',
    image: "/images/lead/lead4.jpg"
}]

const About = () => {
    return (
        <div className="about-page">
            {/* Intro */}
            <section className="about-header">
                <Banner title="We Are CISCO Networking Academy @ Campus of PRMIT&R" description="Supporting you and creating a clear path to help you grow, connect,
                    and achieve your networking goals."> </Banner>
            </section>

            {/* Mission & Vision */}
            <section className="about-vision-mission">
                <InfoCard
                    title="Mission"
                    description="To provide industry-standard networking education, foster innovation,
          and prepare students to excel in real-world IT environments."
                />
                <InfoCard
                    title="Vision"
                    description="Empowering students with cutting-edge networking knowledge and
          skills to become leaders in the global digital transformation."
                />
            </section>

            {/* Teacher Coordinators */}
            <section className="about-teachers">
                <h2>Our Pillars of Strength</h2>
                <p>
                    Led by 3 core teacher coordinators since 2018 — the building blocks of our academy.
                </p>
                <div className="member-grid">
                    {faculty.map((f, idx) => (
                        <TeamMember
                            key={idx}
                            name={f.name}
                            position={f.role}
                            image={f.image}
                        />
                    ))}

                </div>
            </section>

            {/* Student Core Team */}
            <section className="about-core-team">
                <h2>Meet Our Student Coordinators</h2>

                <h3>Core Team</h3>
                <div className="member-grid">
                    {cores.map((core, idx) => (
                        <TeamMember
                            key={idx}
                            name={core.name}
                            position="Core Team Member"
                            image={core.image}
                        />
                    ))}
                </div>

                <h3>Team Leads</h3>
                <div className="member-grid">
                    {leads.map((lead, idx) => (
                        <TeamMember
                            key={idx}
                            name={lead.name}
                            position="Team Lead"
                            image={lead.image}
                        />
                    )

                    )}
                </div>
            </section>

            {/* Footer Offer Section */}
            <section className="about-offer">
                <h2>We Offer</h2>
                <p>
                    Hands-on labs, real-world projects, expert mentorship, networking certifications,
                    and global industry connections to help you grow and achieve your career dreams.
                </p>
            </section>
        </div>
    );
};

export default About;