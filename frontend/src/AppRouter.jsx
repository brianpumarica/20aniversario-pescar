import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter y Route
import { HomePage, CategoryPage, SignIn , NotFound } from './pages';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer'
import Home from './components/Home';

const AppRouter = () => {
    return (
        <Router basename="/">
            <>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/> {/* Pagina de inicio */}
                    <Route path='/category/:category' element={<CategoryPage/>}/> {/* Página de juego Quiz */}
                    <Route path='/signin' element={<SignIn/>} /> {/* Formulario de Inicio de sesión */}
                    <Route path='/home' element={<Home/>}/> {/* Renderizado de base de datos en tablas */}
                    <Route path='*' element={<NotFound/>}/> {/* Ruta, en caso de que no exista la pagina */}
                </Routes>

                <Footer/>
            </>
        </Router>
    )
}

export default AppRouter;
