import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import '../customer/customer.css'

export default function AdminHome() {
  const [customerCount, setCustomerCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const customerRes = await axios.get(`${config.url}/admin/customercount`);
        const managerRes = await axios.get(`${config.url}/admin/managercount`);
        const eventRes = await axios.get(`${config.url}/admin/eventcount`);

        setCustomerCount(customerRes.data);
        setManagerCount(managerRes.data);
        setEventCount(eventRes.data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Hero Image */}
      <div className="image-with-text">
        <img 
          src="/display.jpg" 
          style={{ width: '1500px', height: '300px', objectFit: 'cover', opacity: 0.7 }} 
        />
        <h3 style={{textAlign:"center"}}> </h3>
      </div> 
      <h2>Welcome to Admin Dashboard</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Customers</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#007bff' }}>{customerCount}</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Managers</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}>{managerCount}</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' }}>Items</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff5722' }}>{eventCount}</p>
        </div>
      </div>

      {/* Main Footer Sections */}
      <div className="footer-grid" style={{paddingTop:"30%"}}>
        {/* About Section */}
        <div>
          <h3 className="footer-heading">ABOUT US</h3>
          <ul className="footer-list">
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="footer-heading">OUR SERVICES</h3>
          <ul className="footer-list">
            <li>Food Delivery</li>
            <li>Premium Dining</li>
            <li>Corporate Orders</li>
            <li>Catering</li>
            <li>Membership</li>
          </ul>
        </div>

        {/* For Restaurants */}
        <div>
          <h3 className="footer-heading">FOR RESTAURANTS</h3>
          <ul className="footer-list">
            <li>Partner With Us</li>
            <li>Restaurant App</li>
            <li>Business Tools</li>
            <li>Marketing Services</li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h3 className="footer-heading">LEARN MORE</h3>
          <ul className="footer-list">
            <li>Privacy Policy</li>
            <li>Security</li>
            <li>Terms</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, 
          Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 
          2024-2025 <b><b>© CraveIn™ Ltd. All rights reserved.</b></b>
        </p>
      </div>
      
    </div>
  );
}