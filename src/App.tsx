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
import Rooms from './pages/Rooms';
import PrivateRooms from './pages/PrivateRooms';
import Room from './pages/Room';
import AdjustRoom from './pages/AdjustRoom';
import { NotFound } from './pages/NotFound';

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
          element={user ? <Rooms /> : <Navigate to='/login' />}
        />
        <Route
          path='/public/:id'
          element={user ? <Room /> : <Navigate to='/login' />}
        />
        <Route
          path='/private'
          element={user ? <PrivateRooms /> : <Navigate to='/login' />}
        />
        <Route
          path='/private/:code'
          element={user ? <Room /> : <Navigate to='/login' />}
        />
        <Route
          path='/myRooms'
          element={user ? <Rooms /> : <Navigate to='/login' />}
        />
        <Route
          path='/myRooms/create'
          element={user ? <AdjustRoom /> : <Navigate to='/login' />}
        />
        <Route
          path='/myRooms/update'
          element={user ? <AdjustRoom /> : <Navigate to='/login' />}
        />
        <Route
          path='/myRooms/room/:id'
          element={user ? <Room /> : <Navigate to='/login' />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
