import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../components/Question.jsx';
import { questions } from '../data.js'; /* Importo el array de preguntas de data.js */
import imagenQuiz from '../assets/pescarLogo.jpg'

//Función para barajar las preguntas de cada categoria y también reducirla al numero deseado.
const shuffleArray = (array) => {
    const newArray = array.sort(() => Math.random() - 0.5);
    return newArray.slice(0, 5);
}


export const CategoryPage = () => {

    /* Para leer el parametro de la URL, uso UseParams */
    const { category } = useParams()
    //console.log(category)
    //console.log(questions) //Para revisar las preguntas.

    // useState. Tomo de data.js, buscando todos los questions que coincidan con la categoría dada. 
    const [questionsFiltered, setQuestionsFiltered] = useState(
        questions.filter(question => question.category === category)
    )

    const [indexQuestion, setIndexQuestion] = useState(0);

    const [activeQuiz, setActiveQuiz] = useState(false)

    useEffect(() => {
        const newQuestions = shuffleArray(questionsFiltered);
        setQuestionsFiltered(newQuestions);
        //console.log(newQuestions)
    }, []);
    //console.log(questionsFiltered.length)
    
    return (
        <div
            // className="h-screen 
            // * bg-[url('https://www.pescar.org.ar/wp-content/uploads/2021/10/Home-slider1.jpg')] 
            // * bg-cover bg-no-repeat bg-center"
        >
            {/* Contenido del div */}
            {activeQuiz ? (
                <div className='flex items-center justify-center h-screen -mt-16'>
                <Question
                    filteredQuestion={questionsFiltered[indexQuestion]}
                    setIndexQuestion={setIndexQuestion}
                    indexQuestion={indexQuestion}
                    questionsFiltered={questionsFiltered}
                    setActiveQuiz={setActiveQuiz}
                />
                </div>
            ) : (
                <>
                    <div className="flex items-center justify-center h-screen -mt-20" >
                        <div className="flex items-center justify-center h-screen">
                            <div className="container bg-white p-6 border-2 border-teal-500 rounded-lg inline-block">
                                <div className="flex flex-col items-center justify-center h-full">
                                    <h1 className="text-3xl text-teal-900 text-center font-bold mb-4">
                                        {category}
                                    </h1>
                                    <div className="flex justify-center items-center mb-4">
                                        <img src={imagenQuiz} alt={category} className="w-72" />
                                    </div>
                                    <button className="text-white bg-blue-500 py-2 rounded-lg font-bold px-5 transition-all hover:bg-orange-500 hover:text-gray-900" onClick={() => setActiveQuiz(true)}>
                                        Iniciar Quiz
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )}
        </div>
    )
}