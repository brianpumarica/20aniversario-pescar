import QuienesSomosButton from './QuienesSomosButton';
import RegisterButton from './RegisterButton';
import DashboardButton from './DashboardButton';
import PropTypes from 'prop-types';
import LoginButton from '../log/LoginButton';

const ActionButtons = ({ auth }) => {
    return (
        <div>
            {auth ? (
                <div className="flex flex-col items-center space-y-2 gap-2">
                    <QuienesSomosButton />
                    <RegisterButton />
                    <DashboardButton />
                </div>
            )
            : (
                <div className="flex flex-col items-center space-y-2 gap-2">
                    <QuienesSomosButton />
                    <LoginButton/>
                </div>)
            }
        </div>
    );
};
ActionButtons.propTypes = {
    auth: PropTypes.bool.isRequired, // Agregar la validación para 'auth'
};
export default ActionButtons;
