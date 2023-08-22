import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importa PropTypes

// UnauthenticatedContent.jsx
const UnauthenticatedContent = ({ message }) => {
    
    return (
        <div>
            <p>{message}</p>
            <div>
                <Link to="/login">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        Inicia Sesión
                    </button>
                </Link>
            </div>
        </div>

    );
}
UnauthenticatedContent.propTypes = {
    message: PropTypes.string.isRequired, // Agrega la validación para 'message'
  };
export default UnauthenticatedContent;
