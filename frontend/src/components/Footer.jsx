import ModalDevelopers from "./shared/ModalDevelopers"
import { useState} from "react";

export const Footer = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className='fixed bottom-0 bg-slate-800 text-white w-full overflow-x-hidden'>
            <div style={{ height: '8vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p> Página hecha por </p>
                <a className="bg-transparent  text-blue-700 font-semibold hover:bg-blue-700 hover:text-white border-blue-500 hover:border-transparent rounded p-1" onClick={() => setModalIsOpen(true)}>alumnos</a> 
                <p> de Pescar 2023.</p>
            </div>
            <ModalDevelopers isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}></ModalDevelopers>
        </div>
    )
}

