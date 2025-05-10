import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import AddManager from './AddManager';
import ViewManager from './ViewManagers';
import ViewCustomers from './ViewCustomers';
import AdminLogin from './AdminLogin';
import { useAuth } from '../contextapi/AuthContext';

export default function AdminNavBar() {
  const [collapsed, setCollapsed] = useState(false);
  const { setIsAdminLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button onClick={toggleNavbar} className="toggle-btn">
        {collapsed ? '>' : '<'}
      </button>

      {/* Collapsible Navbar */}
      <nav className={`navbarv ${collapsed ? 'collapsed' : ''}`}>
        <div className="logo"></div>
        <ul className="nav-linksv">
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/addeventmanager">Add Event Managers</Link></li>
          <li><Link to="/viewmanagers">View Event Managers</Link></li>
          <li><Link to="/viewallcustomers">View All Customers</Link></li>
          <li><Link to="/adminlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/addeventmanager" element={<AddManager />} exact />
        <Route path="/viewmanagers" element={<ViewManager />} exact />
        <Route path="/viewallcustomers" element={<ViewCustomers />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
      </Routes>
    </div>
  );
}