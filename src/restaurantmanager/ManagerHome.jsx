import React from 'react'
import '../customer/customer.css'

export default function ManagerHome() {
  return (
    <div>
      {/* Hero Image */}
      <div className="image-with-text">
        <img 
          src="/display.jpg" 
          style={{ width: '1500px', height: '300px', objectFit: 'cover', opacity: 0.7 }} 
        />
        <h3 style={{textAlign:"center"}}>Agent Home Page</h3>
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
  )
}
