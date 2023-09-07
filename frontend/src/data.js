import imagenPescar from './assets/favicon.png';

export const imgs = [
	imagenPescar,
];

export const categories = {
	pescar: 'Pescar', 
};

const { pescar } = categories;

export const questions = [
	/* Preguntas de PESCAR */
    {
        id: 1,
        difficulty: 'Fácil',
        question: '¿Cuántos años cumple la Fundación Pescar en Argentina?',
        category: pescar,
        correct_answer: '20 años',
        incorrect_answers: ['10 años', '18 años', '25 años'],
    },
    {
        id: 2,
        difficulty: 'Fácil',
        question: '¿Cuántos programas de formacion intensiva hay en todo el pais en 2023?',
        category: pescar,
        correct_answer: '60',
        incorrect_answers: ['25', '36', '52'],
    },
    {
        id: 3,
        difficulty: 'Moderado',
        question: '¿Cuántos beneficiarios ha tenido Pescar, desde el 2003?',
        category: pescar,
        correct_answer: '75k',
        incorrect_answers: ['50k', '62k', '32k'],
    },
    {
        id: 4,
        difficulty: 'Moderado',
        question: '¿En qué año se funda el Proyeco Pescar? (¡Ojo! El proyecto, no la fundación.)',
        category: pescar,
        correct_answer: '1988',
        incorrect_answers: ['1995', '2003', '2015'],
    },
    {
        id: 5,
        difficulty: 'Moderado',
        question: '¿En qué año Rose Linck junto con Edgardo Palmero, Silvia Uranga, Eduardo Novillo Astrada y la Universidad de Salvador fundan Fundación Pescar Argentina?',
        category: pescar,
        correct_answer: '2003',
        incorrect_answers: ['1995', '2000', '2007'],
    },
    // {
    //     id: 6,
    //     difficulty: 'Fácil',
    //     question: '¿Cuántos años cumple Pescar?',
    //     category: pescar,
    //     correct_answer: '20 años',
    //     incorrect_answers: ['12 años', '10 años', '25 años'],
    // },
    // {
    //     id: 7,
    //     difficulty: 'Fácil',
    //     question: '¿Cuántos centros Pescar hay en todo el país?',
    //     category: pescar,
    //     correct_answer: '48',
    //     incorrect_answers: ['25', '36', '52'],
    // },
    // {
    //     id: 8,
    //     difficulty: 'Moderado',
    //     question: '¿Cuántos beneficiarios ha tenido Pescar, desde el 2003?',
    //     category: pescar,
    //     correct_answer: '75k',
    //     incorrect_answers: ['50k', '62k', '32k'],
    // },
    // {
    //     id: 9,
    //     difficulty: 'Moderado',
    //     question: '¿En qué año se funda el Proyeco Pescar? (¡Ojo! El proyecto, no la fundación.)',
    //     category: pescar,
    //     correct_answer: '1988',
    //     incorrect_answers: ['1995', '2003', '2015'],
    // },
    // {
    //     id: 10,
    //     difficulty: 'Moderado',
    //     question: '¿En qué año Rose Linck junto con Edgardo Palmero, Silvia Uranga, Eduardo Novillo Astrada y la Universidad de Salvador fundan Fundación Pescar Argentina?',
    //     category: pescar,
    //     correct_answer: '2003',
    //     incorrect_answers: ['1995', '2000', '2007'],
    // },
];
