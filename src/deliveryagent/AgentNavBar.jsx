import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './agent.css';


import AgentLogin from './AgentLogin';
import AgentProfile from './AgentProfile';
import { useAuth } from '../contextapi/AuthContext';
import AgentHome from './AgentHome';

export default function AgentNavBar() {
  const [collapsed, setCollapsed] = useState(false);
  const { setIsAgentLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsAgentLoggedIn(false);
  };

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Toggle Button */}
      <button onClick={toggleNavbar} className="toggle-btn">
        {collapsed ? '>' : '<'}
      </button>

      {/* Collapsible Navbar */}
      <nav className={`navbarv ${collapsed ? 'collapsed' : ''}`}>
        <div className="logo"></div>
        <ul className="nav-linksv">
          <li><Link to="/agenthome">Home</Link></li>
          <li><Link to="/agentprofile">Agent Profile</Link></li>
          <li><Link to="/agentlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
       <Route path='/agenthome' Component={AgentHome}/>
        <Route path="/agentprofile" element={<AgentProfile />} exact />
        <Route path="/agentlogin" element={<AgentLogin />} exact />
      </Routes>
    </div>
  );
}