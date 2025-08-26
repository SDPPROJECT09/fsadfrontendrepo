import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './customer.css';

export default function CustomerHome() {
  const [customer, setCustomer] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedCustomer = sessionStorage.getItem('customer');
    if (storedCustomer) {
      setCustomer(JSON.parse(storedCustomer));
    }
  }, []);

  const foodItems = [
    { id: 1, name: 'Biryani', image: '/images/biryani.jpg' },
    { id: 2, name: 'Pizza', image: '/images/pizza.png' },
    { id: 3, name: 'Burger', image: '/images/Burger.jpg' },
    { id: 4, name: 'Sushi', image: '/images/sushi.webp' },
    { id: 5, name: 'Pasta', image: '/images/pasta.jpg' },
    { id: 6, name: 'Salad', image: '/images/salad.jpg' },
    { id: 7, name: 'Dessert', image: '/images/desert.jpeg' },
    { id: 8, name: 'Steak', image: '/images/steak.jpeg' },
    { id: 9, name: 'Tacos', image: '/images/tacos.webp' },
  ];

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Hero Image */}
      <div className="image-with-text">
        <img 
          src="/display.jpg" 
          style={{ width: '100%', height: '300px', objectFit: 'cover', opacity: 0.7 }} 
        />
      </div>

      {/* Delivery Address */}
      {customer && customer.location && (
        <div style={{ marginTop: '20px', textAlign: 'center', padding: '0 20px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: '#f5f5f5',
            borderRadius: '20px',
            fontSize: '14px'
          }}>
            <span>📍</span>
            <span>Deliver to: {customer.location}</span>
          </div>
        </div>
      )}

      {/* Search Bar
      <div style={{ marginTop: '20px', textAlign: 'center', position: 'relative' }}>
        <input type="text" placeholder="Search for restaurants, dishes..." style={{ width: '50%', padding: '10px 10px 10px 40px', fontSize: '16px', borderRadius: '8px', border: '5px solid #ccc', outline: 'none' }} />
        <span style={{ position: 'absolute', top: '40%', left: '72%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#888' }}>
          🔍
        </span>
      </div> */}

<div className="slider">
      <div className="slider-content">
        🚚 <strong>Free Delivery</strong> on first order • 🎉 <strong>30% OFF</strong> all burgers today • 🍕 Buy 1 Pizza Get 1 Free • 🍣 Sushi Wednesday Specials • 🌯 Custom Burrito Bowl $9.99 • 🍦 Free Dessert with $30+ order
      </div>
    </div>
      
      {/* Grid Layout with Order Button */}
      <div style={{ padding: '10px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
          Explore Our Menu
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {foodItems.map(item => (
            <div key={item.id} style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              padding: '10px',
              textAlign: 'center'
            }}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3>{item.name}</h3>
              <button
                onClick={() => navigate(`/ViewAllItems`)}
                style={{
                  marginTop: '10px',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Order
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Scroll - Popular Dishes */}
<div style={{ 

  margin: '80px 0', 
  width: '100%',
  overflow: 'hidden'
}}>
  <h2 style={{ 
    textAlign: 'center', 
    color: '#333', 
    margin: '0 0 15px 0',
    fontSize: '18px',
    fontWeight: '600'
  }}>
    Popular Dishes
  </h2>

  <div style={{
    display: 'flex',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    padding: '15px 20px',
    gap: '20px',
    WebkitOverflowScrolling: 'touch',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }}>
    {foodItems.map((item) => (
      <div key={item.id} style={{
        flex: '0 0 auto',
        width: '180px',
        height: '180px',
        minWidth: '180px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
        ':hover': {
          transform: 'scale(1.02)'
        }
      }}>
        <img
          src={item.image}
          alt={item.name}
          style={{ 
            width: '100%', 
            height: '140px', 
            objectFit: 'cover',
            borderBottom: '1px solid #f0f0f0'
          }}
        />
        <div style={{
          padding: '10px',
          textAlign: 'center',
          background: 'white'
        }}>
          <p style={{
            margin: 0,
            fontWeight: '600',
            fontSize: '14px',
            color: '#333',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {item.name}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

   {/* Main Footer Sections */}
      <div className="footer-grid">
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
