import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './customer.css';
import config from '../config';

export default function BookItem() 
{
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const eventId = queryParams.get('eventid');

  const [customer, setCustomer] = useState(null);
  const [formData, setFormData] = useState({
    quantity:''
  });

  useEffect(() => {
    const storedCustomer = sessionStorage.getItem("customer");
    if (storedCustomer) {
      setCustomer(JSON.parse(storedCustomer));
    } else {
      alert("Customer not logged in!");
      navigate('/customerlogin');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      item: { id: eventId },
      customer: { id: customer.id },
      ...formData,
      status: 1
    };

    try {
      const response = await fetch(`${config.url}/customer/bookevent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        alert("Order booked successfully!");
        navigate('/bookedevents');
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Order error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      alignItems: 'center',
      marginTop: '20px',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h3 style={{ textAlign: 'center' }}>ORDER FOOD</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
        <div>
          <label>Quantity </label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button type="submit">Confirm Order</button>
        </div>
      </form>
    </div>
  );
}