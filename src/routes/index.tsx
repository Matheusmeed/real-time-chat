import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'firebase/auth';
import { User, auth } from '../firebase';
import Rooms from '../pages/Rooms';
import PrivateRooms from '../pages/PrivateRooms';
import Room from '../pages/Room';
import AdjustRoom from '../pages/AdjustRoom';
import Loading from '../shared/components/Loading';
import { NotFound } from '../pages/NotFound';

const AuthRoute = ({ element, redirectTo, condition }: any) => {
  return condition ? <Navigate to={redirectTo} /> : element;
};

const AppRoutes: React.FC = () => {
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
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={
            <AuthRoute
              element={<Login />}
              redirectTo='/home'
              condition={user !== null}
            />
          }
        />
        <Route
          path='/signup'
          element={
            <AuthRoute
              element={<Signup />}
              redirectTo='/home'
              condition={user !== null}
            />
          }
        />
        <Route
          path='/home'
          element={
            <AuthRoute
              element={<Home />}
              redirectTo='/login'
              condition={user === null}
            />
          }
        />
        <Route
          path='/public'
          element={
            <AuthRoute
              element={<Rooms />}
              redirectTo='/login'
              condition={user === null}
            />
          }
        />
        <Route
          path='/public/:id'
          element={
            <AuthRoute
              element={<Room />}
              redirectTo='/login'
              condition={user === null}
            />
          }
        />
        <Route
          path='/private'
          element={
            <AuthRoute
              element={<PrivateRooms />}
              redirectTo='/login'
              condition={user === null}
            />
          }
        />
        <Route
          path='/private/:code'
          element={
            <AuthRoute
              element={<Room />}
              redirectTo='/login'
              condition={user === null}
            />
          }
        />
        <Route
          path='/myRooms'
          element={
            <AuthRoute
              element={<Rooms />}
              redirectTo='/login'
              condition={user === null}
            />
          }
        />
        <Route
          path='/myRooms/create'
          element={
            <AuthRoute
              element={<AdjustRoom />}
              redirectTo='/login'
              condition={user === null}
            />
          }
        />
        <Route
          path='/myRooms/update'
          element={
            <AuthRoute
              element={<AdjustRoom />}
              redirectTo='/login'
              condition={user === null}
            />
          }
        />
        <Route
          path='/myRooms/room/:id'
          element={
            <AuthRoute
              element={<Room />}
              redirectTo='/login'
              condition={user === null}
            />
          }
        />
        <Route
          path='/'
          element={
            <AuthRoute
              element={<Home />}
              redirectTo='/login'
              condition={user === null}
            />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default AppRoutes;
