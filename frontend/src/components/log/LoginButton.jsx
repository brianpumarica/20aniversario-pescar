import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <div className="text-center mx-auto">
      <Link to="/login">
        <button className="w-full md:w-80 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Inicia Sesión
        </button>
      </Link>
    </div>
  );
}

export default LoginButton;
