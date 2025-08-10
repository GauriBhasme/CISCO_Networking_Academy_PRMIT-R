import React from "react";
import { Users, Award, Code, Network } from "lucide-react";
import "../styles/JoinCommunity.css";

const JoinCommunity = () => {
  const features = [
    { icon: Users, text: "Student-led learning community" },
    { icon: Award, text: "Industry exposure and certification prep" },
    { icon: Code, text: "Hands-on projects and hackathons" },
    { icon: Network, text: "Cross-domain collaboration opportunities" },
  ];

  return (
    <section className="join-community">
      <div className="content">
        <h2>Join Our Tech Community</h2>
        <p>
          Connect with fellow students passionate about technology. Our academy
          fosters collaboration, innovation, and continuous learning through
          peer-to-peer interaction and mentorship.
        </p>

        <ul className="feature-list">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <li key={index} className="feature-item">
                <div className="icon-container">
                  <Icon size={28} />
                </div>
                <span>{feature.text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="image-container">
        <img src="/hero-background.jpeg" alt="Students collaborating" />
      </div>
    </section>
  );
};

export default JoinCommunity;