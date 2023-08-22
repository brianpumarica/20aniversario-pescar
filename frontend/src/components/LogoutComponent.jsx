import axios from 'axios';

const LogoutButton = () => {
    const backendURL = process.env.REACT_APP_BACKEND_URL;

    const handleDelete = () => {
        axios.get(`${backendURL}/logout`)
        .then(res=>{
            console.log(res);
            location.reload(true);
        }).catch(err => console.log(err));
    };

    return (
        <div className="mt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>
                Cerrar Sesión
            </button>
        </div>
    );
}

export default LogoutButton;
