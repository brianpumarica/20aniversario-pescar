import { Link } from 'react-router-dom';

const DashboardButton = () => {
    return (
        <div className="text-center mx-auto">
            <Link to="/dashboard">
                <button className="w-full md:w-80 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Mis datos para el evento
                </button>
            </Link>
        </div>
    );
}

export default DashboardButton;
