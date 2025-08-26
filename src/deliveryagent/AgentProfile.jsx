import { useState, useEffect } from 'react';

export default function AgentProfile() 
{
  const [agent, setAgent] = useState("");
     
  useEffect(() => {
    console.log("Stored Agent data:", sessionStorage.getItem('agent'));
    const storedAgent = sessionStorage.getItem('agent');
    if (storedAgent) {
      setAgent(JSON.parse(storedAgent));
    }
  }, []);

  if (!agent) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Loading profile...
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '26px', color: '#333', marginBottom: '20px' }}>
        Agent Profile
      </h2>

      <div
        style={{
          backgroundColor: 'light grey',
          border: '1px solid black',
          borderRadius: '10px',
          padding: '20px',
          width: '350px',
        }}
      >
        <p><strong>Name:</strong> {agent.name}</p>
        <p><strong>Gender:</strong> {agent.gender}</p>
        <p><strong>Date of Birth:</strong> {agent.dob}</p>
        <p><strong>Email:</strong> {agent.email}</p>
        <p><strong>Username:</strong> {agent.username}</p>
        <p><strong>Mobile No:</strong> {agent.mobileno}</p>
        <p><strong>Address:</strong> {agent.location}</p>
      </div>
    </div>
  );
}