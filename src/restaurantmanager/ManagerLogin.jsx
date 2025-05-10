import { useState } from 'react';
import './manager.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function ManagerLogin() {  // Changed from CustomerLogin to ManagerLogin
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setIsManagerLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/manager/checkmanagerlogin`, formData);

      if (response.data.token) {  // Check for token in response
        // Store token and user data
        localStorage.setItem('token', response.data.token);
        sessionStorage.setItem('manager', JSON.stringify(response.data.user));
        setIsManagerLoggedIn(true);
        navigate("/managerhome");
      } else {
        setMessage(response.data.message || "Login successful but no token received");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data || "Login failed");
      } else {
        setError("An unexpected error occurred.");
      }
      // Clear any existing tokens on error
      localStorage.removeItem('token');
      sessionStorage.removeItem('manager');
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Manager Login</h3>
      {message ? (
        <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p>
      ) : (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input 
            type="text" 
            id="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            id="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}