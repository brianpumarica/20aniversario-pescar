import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Results from './Results'

const Question = ({ filteredQuestion, setIndexQuestion, indexQuestion, questionsFiltered, setActiveQuiz,
}) => {

  /* Estado para establecer las preguntas random. */
  const [answersRandom, setAnswersRandom] = useState([])

  /* Iniciamos el score en 0 */
  const [score, setScore] = useState(0)
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null) /* lo inicializamos en null, porque el jugador inicia sin ninguna respuesta pre seleccionada. */
  /* Iniciamos un estado ansered para verificar si el usuario ha respondido algo o no. */
  const [answered, setAnswered] = useState(false)
  const [activeResults, setActiveResults] = useState(false)

  useEffect(() => {
    /* Creamos una constante que guarde las respuestas incorrectas y la correcta. */
    const answers = [
      ...filteredQuestion.incorrect_answers,
      filteredQuestion.correct_answer
    ]

    setAnswersRandom(answers.sort(() => Math.random() - 0.5)); /* Seteamos esas answers guardadas en la constante. El math.random permite poner las respuestas de forma aleatoria para evitar que siempre quede en el mismo lugar.*/
  }, [filteredQuestion])

  /* Cambio y avance en la pregunta. */
  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1 );
    setSelectAnswerIndex(null);
    setAnswered(false);
  }

  const checkAnswer = (answerText, index) => {

    if(answerText === filteredQuestion.correct_answer) {
      setScore(score + 1);
    }
    setSelectAnswerIndex(index)
    setAnswered(true)
  }

  /* Reseteador de quiz */
  const onReset = () => {
    setScore(0);
    setActiveQuiz(false);
    setIndexQuestion(0)
  }

  Question.propTypes = {
    filteredQuestion: PropTypes.shape({
      incorrect_answers: PropTypes.arrayOf(PropTypes.string),
      correct_answer: PropTypes.string,
      difficulty: PropTypes.string,
      question: PropTypes.string,
    }).isRequired,
    setIndexQuestion: PropTypes.func.isRequired,
    indexQuestion: PropTypes.number.isRequired,
    questionsFiltered: PropTypes.arrayOf(
      PropTypes.shape({
        // Define aquí las propiedades de cada pregunta
      })
    ).isRequired,
    setActiveQuiz: PropTypes.func.isRequired,
  };

  return (
    <>

    {activeResults ? (
      <Results questionsFiltered={questionsFiltered} score={score} onReset={onReset}/>
    ) : (
      <div className="flex flex-col justify-between shadow-md shadow-slate-300 w-[600px] h-[600px] p-10 rounded-lg">
        <span className="text-xl font-bold">
          {/* numero de pregunta actual y numero de preguntas totales. */}
          {indexQuestion + 1} / {questionsFiltered.length}
        </span>

        <div>
          <span className="font-semibold">Dificultad: </span>
          <span className="font-bold">{filteredQuestion.difficulty}</span>
        </div>

        <button 
          className="border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900" 
          onClick={onReset}>
          Reiniciar
        </button>

        <div>
          <h1 className="font-bold">
            {filteredQuestion.question}
          </h1>
        </div>

        {/* Las respuestas del usuario van aqui */}
        <div className="grid grid-cols-2 gap-5">
          {/* Mapeamos un arreglo de respuesta correcta e incorrectas */}
          {answersRandom.map((answer, index) => (
            <button 
              className={`border p-5 rounded-lg flex justify-center items-center hover:bg-lime-300 hover:scale-105 ${selectAnswerIndex !== null && 
                index === selectAnswerIndex
                  ? answer === filteredQuestion.correct_answer 
                    ? 'bg-green-500' 
                    : 'bg-red-500'
                  : ''}`} 
                  key={answer} 
                  onClick={() => checkAnswer(answer, index)}
                  disabled={answered && selectAnswerIndex !== index} //Desactiva la posibilidad de que el usuario vuelva a elegir una respuesta. 
              >
              <p className="font-medium text-center text-sm">
                {answer}
              </p>
            </button>
          ))
          }
        </div>

        {/* Aqui va el condicional para mostrar el boton de siguiente pregunta o el de finalizar. */}
        {indexQuestion + 1 === questionsFiltered.length ? (
						<button
							className='border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium'
							onClick={() => {
								setAnswered(false);
								setActiveResults(true);
							}}
						>
							Finalizar
						</button>
					) : (
						<button
							className='border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium'
							onClick={onNextQuestion}
						>
							Siguiente Pregunta
						</button>
					)}
      </div>
    ) }
    </>
  )
}

export default Question
