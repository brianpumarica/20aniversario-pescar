import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, CategoryPage, Register, } from './pages';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AppRouter = () => {
    const [auth, setAuth] = useState(false);
    const [rol, setRol] = useState('usuario');
    const [message, setMessage] = useState('');
    const backendURL = process.env.REACT_APP_BACKEND_URL;

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get(`${backendURL}/verify`)
            .then(res => {
                if (res.data.Status === "Success") {
                    setMessage(res.data.Status);
                    setRol(res.data.rol)
                    setAuth(true);
                    return axios.post(`${backendURL}/saveId`, { id: res.data.id });
                } else {
                    setAuth(false);
                    setMessage(res.data.Error);
                }
            })
            .then(response => {
                if (response) {
                    console.log(response.data);
                    setAuth(true);
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [backendURL,setAuth, setRol]);

    return (
        <Router basename="/">
            <div className="min-h-screen">
                <Navbar auth={auth} setAuth={setAuth} />
                <Routes>
                    <Route path='/' element={<HomePage auth={auth} />} />
                    <Route path='/category/:category' element={<CategoryPage />} />
                    <Route path='/login' element={<Login auth={auth} setAuth={setAuth}/>} />
                    <Route
                        path='/dashboard'
                        element={<Dashboard auth={auth} message={message} />}
                    />
                    <Route path='/register' element={<Register rol={rol} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default AppRouter;
