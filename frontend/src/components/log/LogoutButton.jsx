import axios from 'axios';

const LogoutButton = () => {
    const backendURL = process.env.REACT_APP_BACKEND_URL||'aniversariopescar.com.ar/api/';

    const handleDelete = () => {
        axios.get(`${backendURL}/logout`)
        .then(res=>{
            console.log(res);
            location.reload(true);
        }).catch(err => console.log(err));
    };

    return (
        <div className="text-center mx-auto">
            <button className="w-full md:w-80 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>
                Cerrar Sesión
            </button>
        </div>
    );
}

export default LogoutButton;
