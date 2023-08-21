import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';

export const HomePage = () => {
    return (
        <div className='container'>
            <CategoryList />

            <div className="mt-4">
                <Link to="/login">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Ir a LOG IN
                    </button>
                </Link>
            </div>

            <div className="mt-4">
                <Link to="/home">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        Informacion de usuarios/invitados
                    </button>
                </Link>
            </div>
            <div className="mt-4">
                <Link to="/register">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        Registrar
                    </button>
                </Link>
            </div>
        </div>
    );
}
