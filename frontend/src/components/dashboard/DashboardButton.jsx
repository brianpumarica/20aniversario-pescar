import { Link } from 'react-router-dom';

const DashboardButton = () => {
    return (
        <div className="mt-4">
            <Link to="/dashboard">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Editar datos personales e invitados.
                </button>
            </Link>
        </div>
    );
}

export default DashboardButton;
