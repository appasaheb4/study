// privateRoute.js
import {Navigate, Outlet} from 'react-router-dom';

const PrivateRoutes = () => {
  const auth = localStorage.getItem('token'); // Example check
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

// app.js
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
