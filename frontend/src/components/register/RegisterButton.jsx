import { Link } from 'react-router-dom';

const RegisterButton = () => {
  return (
    <div className="mt-4">
      <Link to="/register">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Registrar
        </button>
      </Link>
    </div>
  );
}

export default RegisterButton;
