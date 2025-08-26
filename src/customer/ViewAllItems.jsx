import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import './customer.css'; // Include the custom CSS

export default function ViewAllItems() {
  const [events, setEvents] = useState([]);
  const [searchTerms, setSearchTerms] = useState({
    id: '',
    manager: '',
    company: '',
    category: '',
    title: '',
    description: '',
    cost: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const fetchAllEvents = async () => {
    try {
      const response = await fetch(`${config.url}/customer/viewallevents`);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleBookClick = (itemId) => {
    const customer = JSON.parse(sessionStorage.getItem("customer"));
    if (!customer || !customer.id) {
      alert("Customer not logged in");
      return;
    }

    navigate(`/bookevent?eventid=${itemId}`);
  };

  const handleSearchChange = (e, field) => {
    setSearchTerms(prev => ({ ...prev, [field]: e.target.value }));
  };

  const filteredEvents = events.filter(event => {
    return (
      // event.id.toString().includes(searchTerms.id) &&
      // event.manager.name.toLowerCase().includes(searchTerms.manager.toLowerCase()) &&
      // event.manager.restaurant_name.toLowerCase().includes(searchTerms.company.toLowerCase()) &&
      // event.category.toLowerCase().includes(searchTerms.category.toLowerCase()) &&
      event.title.toLowerCase().includes(searchTerms.title.toLowerCase()) 
      // event.description.toLowerCase().includes(searchTerms.description.toLowerCase()) &&
      // event.cost.toString().includes(searchTerms.cost)
    );
  });

  return (
  <div className="event-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h3 className="event-heading" style={{ 
      textAlign: 'center', 
      textDecoration: 'underline',
      marginBottom: '20px'
    }}>
      Available Items
    </h3>
    
    <div style={{ width: '100%', overflowX: 'auto' }}>
       <input 
                type="text" 
                placeholder="Search..." 
                onChange={e => handleSearchChange(e, 'title')} 
                style={{ 
                  padding: '8px',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              />
      <table 
        className="event-table" 
        border={5}
        style={{ 
          margin: '0 auto',
          borderCollapse: 'collapse',
          width: '95%',
          maxWidth: '1200px'
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: '12px', textAlign: 'left' }}>Event ID</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Restaurant Name</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Restaurant Location</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Category</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Title</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Description</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Cost</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <tr key={event.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px' }}>{event.id}</td>
                <td style={{ padding: '12px' }}>{event.manager.restaurant_name}</td>
                <td style={{ padding: '12px' }}>{event.manager.restaurant_location}</td>
                <td style={{ padding: '12px' }}>{event.category}</td>
                <td style={{ padding: '12px' }}>{event.title}</td>
                <td style={{ padding: '12px' }}>{event.description}</td>
                <td style={{ padding: '12px' }}>{event.cost}</td>
                <td style={{ padding: '12px' }}>
                  <button 
                    className="book-button" 
                    onClick={() => handleBookClick(event.id)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Order
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ padding: '20px', textAlign: 'center' }}>
                No matching items found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);
}