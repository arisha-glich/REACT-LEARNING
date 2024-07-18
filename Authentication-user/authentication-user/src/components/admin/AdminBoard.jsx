import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminBoard = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="admin-board">
        
      <button onClick={handleSignupClick}>Signup</button>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default AdminBoard;
