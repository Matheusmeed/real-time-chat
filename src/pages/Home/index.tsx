import React from 'react';
import { Button } from '@material-ui/core';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/home');
    } catch (error) {
      toast.error('Erro ao fazer logout', {
        style: { background: '#ff00006e', color: '#FFFFFF' },
      });
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <Button variant='contained' color='primary' onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
