/* Este archivo nos servirá de punto de entrada de las rutas. */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, CategoryPage } from './pages'; /* Aqui lo importo desde la carpeta pages, gracias al archivo index.js contenida en la misma. */
import { Navbar } from './components/Navbar';

const AppRouter = () => {
    return (
        <>
            <Navbar/>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/category/:category' element={<CategoryPage/>}/>
            </Routes>

            {/* Aqui se debería agregar el FOOTER */}
        </>
    )
}

export default AppRouter;