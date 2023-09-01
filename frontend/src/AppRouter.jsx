import { useEffect, useState } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, CategoryPage, Register } from './pages';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const AppRouter = () => {
  const [auth, setAuth] = useState(false);
  const [rol, setRol] = useState('usuario');
  const [message, setMessage] = useState('');
  const backendURL = process.env.REACT_APP_BACKEND_URL||'aniversariopescar.com.ar/api/';

  axios.defaults.withCredentials = true;
  
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get(`${backendURL}/verify`);
  
        if (response.data.Status === 'Success') {
          setMessage(response.data.Status);
          setRol(response.data.rol);
          setAuth(true);
          saveIdToServer(response.data.id);      
        } else {
          setAuth(false);
          setMessage(response.data.Error);
        }
      } catch (error) {
        console.error('Error:', error);
        setAuth(false);
        setMessage('Error en el servidor');
      }
    };
    const saveIdToServer = async (id) => {
      try {
        await axios.post(`${backendURL}/saveId`, { id });
      } catch (error) {
        console.error('Error:', error);
      }
    };
    checkAuthentication();
  }, [backendURL]);



  

  return (
    <Router basename="/">
      <div className="min-h-screen">
        <Navbar auth={auth} setAuth={setAuth} rol={rol} setRol={setRol}/>
        <Routes>
          <Route path="/" element={<HomePage auth={auth} />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/login" element={<Login auth={auth} setAuth={setAuth} />} />
          <Route path="/dashboard" element={<Dashboard auth={auth} message={message} />} />
          <Route path="/register" element={<Register rol={rol} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
