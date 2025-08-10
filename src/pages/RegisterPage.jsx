import '../styles/RegisterPage.css';
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="register-page">
      <div className="register-container">
      <div className="register-box">
        <div className="icon">
          <i className="fa-solid fa-network-wired"></i>
        </div>
        <h2>Join Our Academy</h2>
        <p>
          Want to join the Cisco Networking Academy @ Campus? Register below to
          get access to workshops, events, hackathons, and certifications.
        </p>

        <form>
          <label htmlFor="name">Full Name *</label>
          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input id="name" type="text" placeholder="Enter your full name" required />
          </div>

          <label htmlFor="email">College Email ID *</label>
          <div className="input-group">
            <i className="fa-solid fa-envelope"></i>
            <input id="email" type="email" placeholder="your.name@college.edu" required />
          </div>

          <label htmlFor="course">Course/Branch *</label>
          <div className="input-group">
            <i className="fa-solid fa-graduation-cap"></i>
            <select id="course" required>
              <option value="">Select your course</option>
              <option>B.Tech CSE</option>
              <option>B.Tech ECE</option>
              <option>B.Sc IT</option>
              <option>MCA</option>
            </select>
          </div>

          <label htmlFor="year">Year *</label>
          <div className="input-group">
            <i className="fa-solid fa-calendar-days"></i>
            <select id="year" required>
              <option value="">Select your year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          <label htmlFor="password">Password *</label>
          <div className="input-group">
            <i className="fa-solid fa-lock"></i>
            <input id="password" type="password" placeholder="Create a strong password" required />
            <i className="fa-solid fa-eye"></i>
          </div>

          <button type="submit" className="btn">Create Account</button>

          <p className="login-link">
            Already have an account? <Link to="/login">Login Here</Link>
          </p>
          <small>
            By creating an account, you agree to participate in our learning
            community and follow academy guidelines.
          </small>
        </form>
      </div>
    </div>
    </div>
    
  );
}

export default RegisterPage;
