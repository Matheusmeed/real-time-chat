import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'firebase/auth';
import { User, auth } from './firebase';
import LoadingPage from './shared/components/LoadingPage';
import PublicRooms from './pages/PublicRooms';
import PrivateRooms from './pages/PrivateRooms';
import CreateRooms from './pages/CreateRooms';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={user ? <Navigate to='/home' /> : <Login />}
        />
        <Route
          path='/signup'
          element={user ? <Navigate to='/home' /> : <Signup />}
        />
        <Route
          path='/home'
          element={user ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/public'
          element={user ? <PublicRooms /> : <Navigate to='/login' />}
        />
        <Route
          path='/private'
          element={user ? <PrivateRooms /> : <Navigate to='/login' />}
        />
        <Route
          path='/create'
          element={user ? <CreateRooms /> : <Navigate to='/login' />}
        />
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
