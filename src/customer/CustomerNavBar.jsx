import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './customer.css';
import CustomerHome from './CustomerHome';
import CustomerProfile from './CustomerProfile';
import CustomerLogin from './CustomerLogin';
import UpdateProfile from './UpdateProfile';
import { useAuth } from '../contextapi/AuthContext';
import ViewAllItems from './ViewAllItems';
import BookItems from './BookItems';
import BookItem from './BookItem';

import Contact from '../Contact';



export default function CustomerNavBar() {
  const [collapsed, setCollapsed] = useState(false);
  const { setIsCustomerLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsCustomerLoggedIn(false);
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
          <li><Link to="/customerhome">Home</Link></li>
          <li><Link to="/customerprofile">Customer Profile</Link></li>
          <li><Link to="/updateprofile">Update Profile</Link></li>
          <li><Link to="/ViewAllItems">Order New Item</Link></li>
          <li><Link to="/bookedevents">Ordered Items</Link></li>
          <li><Link to="/contact">Send Verification Mail</Link></li>
          <li><Link to="/customerlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>
       
      {/* Routes */}
      <Routes>
      <Route path="/customerhome" element={<CustomerHome />} exact />
        <Route path="/customerprofile" element={<CustomerProfile />} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact />
        <Route path="/ViewAllItems" element={<ViewAllItems/>} exact />
        <Route path="/bookevent" element={<BookItem/>} />
        <Route path="/bookedevents" element={<BookItems/>} exact />
        <Route path="/customerlogin" element={<CustomerLogin />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </div>
  );
}