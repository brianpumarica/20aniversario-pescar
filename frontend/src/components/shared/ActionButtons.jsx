import QuienesSomosButton from './QuienesSomosButton';
import RegisterButton from './RegisterButton';
import JugarButton from './JugarButton';
import DashboardButton from './DashboardButton';
import PropTypes from 'prop-types';

const ActionButtons = ({ auth }) => {
    return (
        <div>
            {auth ? (
                <div className="flex flex-col items-center space-y-2 gap-2">
                    <QuienesSomosButton />
                    <RegisterButton />
                    <JugarButton />
                    <DashboardButton />
                </div>
            )
            : (
                <div className="flex flex-col items-center space-y-2 gap-2">
                    <QuienesSomosButton />
                    <JugarButton />
                </div>)
            }
        </div>
    );
};
ActionButtons.propTypes = {
    auth: PropTypes.bool.isRequired, // Agregar la validación para 'auth'
};
export default ActionButtons;
