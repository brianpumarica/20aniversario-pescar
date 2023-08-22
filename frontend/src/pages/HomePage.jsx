import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import LogoutButton from '../components/logComponents/LogoutComponent';
import LoginButton from '../components/logComponents/LogInComponent';

export const HomePage = () => {
    return (
        <div className='container'>
            <CategoryList />

            <LoginButton></LoginButton>

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
            <LogoutButton></LogoutButton>
        </div>
    );
}
