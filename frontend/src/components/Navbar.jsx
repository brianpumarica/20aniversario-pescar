import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
                <span className="text-2xl font-[Montserrat]">
                    <Link to='/'>
                        <img className="h-14 inline" src="https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2021/10/Home-Boceto-Pescar-2021-312x96-1.png?resize=312%2C96&ssl=1" alt="" />
                    </Link>
                </span>
                <span className="text-3xl cursor-pointer mx-2 md:hidden block">
                    {/* <!-- Al accionar en icono menu se ejecuta el this (llamada a funcion) --> */}
                    <ion-icon name="menu-outline" onclick="Menu(this)"></ion-icon>
                </span>
            </div>

            <ul className="add-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 md:flex">
                <li className="mx-4 my-6 md:my-0">
                    <Link to='/' className="text-xl hover:text-cyan-500 duration-500">Inicio</Link>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <Link to="#" className="text-xl hover:text-cyan-500 duration-500">Sobre Nosotros</Link>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <Link to="#" className="text-xl hover:text-cyan-500 duration-500">Contacto</Link>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;
