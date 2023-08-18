import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className='bg-gray-900 py-5 flex justify-center'>
            <Link to='/'>
                <h1 className='text-white text-center text-2x1 font-bold hover:scale-110 transition-all duration-500'>¡Bienvenido!</h1>
                <h2 className='text-white text-2x1 font-bold hover:scale-110 transition-all duration-500'>¡Pescar cumple 20 años!</h2>
            </Link>
        </header>
    )
}
