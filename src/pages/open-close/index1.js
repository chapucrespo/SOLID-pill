/* eslint-disable default-case */

//Si quiero otro tipo de pregunta, tengo que extender el switch, y puede volverse eterno
export const printExam = (questions) => {
    questions.forEach((question) => {
    console.log(question.description);
        switch (question.type) {
        case "boolean":
        console.log("1. TRUE 2.FALSE");
        break;
        case "writing":
        console.log("Your answer: _____");
        break;
        };
    });
};

const questions = [
    {
    description: "Who is driving for McLaren in 2025?",
    type: "writing"
    },
    {
    description: "Lotus is currently a scuderia in Formula 1",
    type: "boolean"
}
];

printExam(questions);

