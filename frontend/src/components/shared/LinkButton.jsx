import PropTypes from 'prop-types';

const LinkButton = ({ text, link }) => {
    return (
        <a
            href={link}
            className="bg-amber-400  hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full shadow-md transform transition-transform hover:scale-105 duration-300 ease-in-out sm:w-3/5 w-4/5 text-center">
            {text}
        </a>
    );
};

export default LinkButton;
LinkButton.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};