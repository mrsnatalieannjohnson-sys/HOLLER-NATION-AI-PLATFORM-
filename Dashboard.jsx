import React, { useState, useEffect } from 'react';

const UserDashboard = () => {
  const [userData, setUserData] = useState({
      user_id: "holler_001",
      role: "Lead Artist / Architect",
      atom_balance: 5000,
      owned_songs: ["The_First_Spark_Master.wav", "Celestial_Order_Ch1.txt"],
      royalty_share: 100.0
  });

  return (
    <div style={{ padding: '40px', backgroundColor: '#0a0a0a', color: '#e0e0e0', fontFamily: 'monospace' }}>
      <h1>HOLLER-NATION-AI</h1>
      <div style={{ backgroundColor: '#1a1a1a', padding: '20px' }}>
        <h2>Profile: {userData.user_id}</h2>
        <p>Role: {userData.role}</p>
        <p>Atom Balance: {userData.atom_balance} Credits</p>
      </div>
    </div>
  );
};

export default UserDashboard;
