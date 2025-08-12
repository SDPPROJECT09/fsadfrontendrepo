import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AgentHome() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [agentId, setAgentId] = useState(null);

  useEffect(() => {
    const storedAgent = sessionStorage.getItem('agent');
    if (storedAgent) {
      const agent = JSON.parse(storedAgent);
      setAgentId(agent.id);
      fetchBookings(AgentHome.id);
    } else {
      setError('Agent not logged in.');
    }
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${config.url}/agent/viewbookingsbyagent`);
      setBookings(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch bookings');
      setBookings([]);
    }
  };


  
  

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      fontFamily: 'Arial, sans-serif',
    }}>

      {/* Hero Image */}
      <div className="image-with-text">
        <img 
          src="/display.jpg" 
          style={{ width: '1500px', height: '300px', objectFit: 'cover', opacity: 0.7 }} 
        />
        <h3 style={{textAlign:"center"}}></h3>
      </div> 

      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Bookings By Customers</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {bookings.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No bookings available for you.</p>
      ) : (
        <table border={5} style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <thead style={{ backgroundColor: '#f2f2f2' }}>
            <tr>
              <th>Booking ID</th>
              <th>Event ID</th>
              <th>Event Title</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Booking Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.id}</td>
                <td>{booking.item.id}</td>
                <td>{booking.item.title}</td>
                <td>{booking.customer?.name}</td>
                <td>{booking.customer?.email}</td>
                <td>{booking.quantity}</td>
                <td>{booking.status}</td>
                <td>{new Date(booking.bookingtime).toLocaleString()}</td>
                <td>
                      <button
                        
                        style={{ marginRight: '5px', backgroundColor: 'green', color: 'white' }}
                      >
                        Accept
                      </button>
                      <button
                        
                        style={{ backgroundColor: 'red', color: 'white' }}
                      >
                        Reject
                      </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}