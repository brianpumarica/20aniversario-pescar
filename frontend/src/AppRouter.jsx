import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter y Route
import { HomePage, CategoryPage, Login , Register} from './pages';
import { Navbar } from './components/Navbar';
import UserDasboard from './components/Dashboard';
const AppRouter = () => {
    return (
        <Router basename="/">
            <>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/category/:category' element={<CategoryPage/>}/>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/dashboard' element={<UserDasboard/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Routes>

                {/* Aquí se debería agregar el FOOTER */}
            </>
        </Router>
    )
}

export default AppRouter;
