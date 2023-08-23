import AuthComponent from '../components/auth/authComponent';
import UnauthenticatedContent from '../components/auth/UnauthenticatedContent';
import RegisterForm from '../components/register/RegisterForm';

export const Register = () => {
    const backendURL = process.env.REACT_APP_BACKEND_URL;
    const { auth, message } = AuthComponent({ backendURL });   

    return (
        <div>
            {auth ?
                <div>
                    <RegisterForm/>
                </div>
                :
                <div>
                    <UnauthenticatedContent message={message} />
                </div>}
        </div>
    );
}
