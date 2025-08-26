import { useState, useEffect } from 'react';
import axios from 'axios';
import './customer.css';
import config from '../config';

export default function BookItems() {
  const [bookedEvents, setBookedEvents] = useState([]);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchBookedEvents = async () => {
      const storedCustomer = sessionStorage.getItem('customer');
      if (storedCustomer) {
        const customerData = JSON.parse(storedCustomer);
        setCustomer(customerData);
        try {
          const response = await axios.get(`${config.url}/customer/bookedevents/${customerData.id}`);
          setBookedEvents(response.data);
        } catch (error) {
          console.error('Error fetching booked events:', error);
        }
      } else {
        alert('Please log in to view your booked events.');
      }
    };

    fetchBookedEvents();
  }, []);

  return (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    <div style={{ width: '100%', textAlign: 'center', marginBottom: '30px', position: 'relative', top: '-200px' }}>
    <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Your Ordered Items</h3>
    {customer ? (
      <div>
        <table style={{ width: '100%', textAlign: 'center', marginBottom: '10x' }}>
          <thead style={{ backgroundColor: '#f2f2f2' }}>
            <tr>
              <th>Booking ID</th>
              <th>Event Category</th>
              <th>Event Title</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Booking Time</th>
            </tr>
          </thead>
          <tbody>
            {
              bookedEvents.length > 0 ? bookedEvents.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.item.category}</td>
                  <td>{item.item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.status}</td>
                  <td>{new Date(item.bookingtime).toLocaleString()}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="8">No booked events found.</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    ) : (
      <p>Loading your customer details...</p>
    )}
    </div>
  </div>
);
}