import LinkButton from './LinkButton';

// import PropTypes from 'prop-types';
// import LoginButton from '../log/LoginButton';

// const ActionButtons = ({ auth }) => {
const ActionButtons = () => {
    return (
        <div>
            <div className="flex flex-col items-center space-y-2 gap-2">
                <LinkButton text="Trivia" link="/#/category/Pescar"/>
                <LinkButton text="MemoTest" link="/#/memoryTest"/>
                <LinkButton text="Emprendimientos" link="/#/emprendimientos"/>
                <LinkButton text="Estudiantes" link="/#/estudiantes"/>
                <LinkButton text="Testimonios" link="/#/testimonios"/>
            </div>
        </div>
    );
};
// ActionButtons.propTypes = {
//     auth: PropTypes.bool.isRequired, // Agregar la validación para 'auth'
// };
export default ActionButtons;
