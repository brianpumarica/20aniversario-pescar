import PropTypes from 'prop-types';

const Results = ({ score, questionsFiltered, onReset }) => {
    return (
        <div className="flex flex-col justify-evenly items-center shadox-xl rounded-lg w-[600px] h-[600px] gap-5 bg-white">
        <h1 className="text-4xl font-bold">Resultados</h1>

        <div className="flex flex-col gap-5 text-center text-lg font-bold">
            <span>¡Acertaste!</span>
            <span className="font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse">
            {((score / questionsFiltered.length) * 100).toFixed(0)}%
            </span>
            de las {score} preguntas de {questionsFiltered.length}
        </div>

        <button
            className="border border-orange-500 px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900"
            onClick={onReset}
        >
            ¡Vamos de nuevo!
        </button>
        </div>
    );
    };

    Results.propTypes = {
    score: PropTypes.number.isRequired,
    questionsFiltered: PropTypes.arrayOf(
        PropTypes.shape({
        // Define aquí las propiedades de cada pregunta
        })
    ).isRequired,
    onReset: PropTypes.func.isRequired,
    };

    export default Results;