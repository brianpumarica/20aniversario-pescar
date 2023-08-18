/* Este archivo nos servirá de punto de entrada de las rutas. */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, CategoryPage, SignIn } from './pages'; /* Aqui lo importo desde la carpeta pages, gracias al archivo index.js contenida en la misma. */
import { Navbar } from './components/Navbar';
import { InformationTable } from './components/InformationTable';

const AppRouter = () => {
    return (
        <>
            <Navbar/>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/category/:category' element={<CategoryPage/>}/>
                <Route path='/signin' element= {<SignIn/>} />
                <Route path='/information' element={<InformationTable/>}/>
            </Routes>

            {/* Aqui se debería agregar el FOOTER */}
        </>
    )
}

export default AppRouter;