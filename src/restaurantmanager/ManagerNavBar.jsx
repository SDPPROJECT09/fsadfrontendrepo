import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './manager.css';
import ManagerHome from './ManagerHome';
import ManagerProfile from './ManagerProfile';
import ManagerLogin from './ManagerLogin';
import { useAuth } from '../contextapi/AuthContext';
import ViewOrders from './ViewOrders';
import ViewItemsByManager from './ViewItemByManager';
import AddItem from './AddItem';

export default function ManagerNavBar() {
  const [collapsed, setCollapsed] = useState(false);
  const { setIsManagerLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsManagerLoggedIn(false);
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
        <li><Link to="/managerhome">Home</Link></li>
          <li><Link to="/managerprofile">Manager Profile</Link></li>
          <li><Link to="/addevent">Add New Item</Link></li>
          <li><Link to="/vieweventsbymanager">View Items</Link></li>
          <li><Link to="/viewbookings">View Orders</Link></li>
          <li><Link to="/managerlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/managerhome" element={<ManagerHome />} exact />
        <Route path="/managerprofile" element={<ManagerProfile/>} exact />
        <Route path="/addevent" element={<AddItem/>} exact />
        <Route path="/vieweventsbymanager" element={<ViewItemsByManager/>} exact />
        <Route path="/viewbookings" element={<ViewOrders/>} exact />
        <Route path="/managerlogin" element={<ManagerLogin/>} exact />
      </Routes>
    </div>
  );
}