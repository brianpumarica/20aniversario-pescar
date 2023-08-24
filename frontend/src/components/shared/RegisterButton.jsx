import { Link } from 'react-router-dom';

const RegisterButton = () => {
  return (
    <div className="text-center mx-auto">
      <Link to="/register">
        <button className="w-full md:w-80 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Registrar Usuario
        </button>
      </Link>
    </div>
  );
}

export default RegisterButton;
