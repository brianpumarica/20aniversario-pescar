import AuthComponent from '../components/auth/authComponent';
import UnauthenticatedContent from '../components/auth/UnauthenticatedContent';
import RegisterForm from '../components/register/RegisterForm';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import WithoutPermissionComponent from '../components/WithoutPermissionComponent';

export const Register = ({ rol }) => {
    const backendURL = process.env.REACT_APP_BACKEND_URL||'aniversariopescar.com.ar/api/';
    const { auth, message } = AuthComponent({ backendURL });

    return (
        <div>
            {auth ? (
                rol === 'admin' ? (
                    <RegisterForm />
                ) : (
                    <WithoutPermissionComponent/>
                )
            )
                :
                <div>
                    <UnauthenticatedContent message={message} />
                </div>}
        </div>
    );
}
Register.propTypes = {
    rol: PropTypes.string.isRequired,
};