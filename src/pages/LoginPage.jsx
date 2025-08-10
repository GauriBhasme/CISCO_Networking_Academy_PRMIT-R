import '../styles/LoginPage.css'
import { Link } from "react-router-dom";
function LoginPage() {

    return (

        <div className="login-page">
<div className="login-container">
                <div className="login-box">
                    <div className="icon">
                        <i className="fa-solid fa-network-wired"></i>
                    </div>
                    <h2>Welcome Back</h2>
                    <p>Sign in to access your academy account</p>

                    <form>
                        <label>Email Address</label>
                        <div className="input-group">
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" placeholder="Enter your email" required/>
                        </div>

                        <label>Password</label>
                        <div className="input-group">
                            <i className="fa-solid fa-lock"></i>
                            <input type="password" placeholder="Enter your password" required/>
                                <i className="fa-solid fa-eye"></i>
                        </div>

                        <div className="forgot">
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button type="submit" className="btn">Sign In</button>

                        <div className="divider">or</div>

                        <p className="register">New to our academy? <Link to="/register">Register Free</Link></p>
                        <small>Join our free tech community and access all workshops and events</small>
                    </form>
                </div>
                </div>
        </div>
            

        

            );
}

            export default LoginPage;