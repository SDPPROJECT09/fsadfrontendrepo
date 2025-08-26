import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function AdminLogin() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsAdminLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Send credentials to backend
      const response = await axios.post(`${config.url}/admin/checkadminlogin`, formData);

      // 2. Store token and user data
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Optional
      setIsAdminLoggedIn(true);

      // 3. Redirect to admin dashboard
      navigate("/adminhome");

    } catch (err) {
      setError(err.response?.data || "Login failed. Check credentials.");
      localStorage.removeItem("token"); // Clear invalid token
    }
  };

  return (
    <div className="login-container">
      <h3 style={{ textAlign: "center",textDecoration: "underline"}}>Admin Login</h3>
      {error && <p className="error">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}