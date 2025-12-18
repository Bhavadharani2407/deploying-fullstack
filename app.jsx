import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GroupDetail from './pages/GroupDetail';
import api from './api/api'; // Axios instance with JWT
import { loginUser } from './redux/userSlice';

// Optional: Auto-login if token exists
const AutoLogin = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // You can call an endpoint to validate token or fetch user
      api.get('/auth/me')
        .then((res) => {
          dispatch({ type: 'user/loginUser/fulfilled', payload: { user: res.data, token } });
        })
        .catch((err) => {
          localStorage.removeItem('token');
          console.log('Token invalid, please login again');
        });
    }
  }, [dispatch]);

  return children;
};

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/groups/:id" element={<GroupDetail />} />
    </Routes>
  </Router>
);

const App = () => {
  return (
    <Provider store={store}>
      <AutoLogin>
        <AppRoutes />
      </AutoLogin>
    </Provider>
  );
};

export default App;
