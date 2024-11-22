class Question {
    constructor(description) {
        this.description = description
    }

    printQuestionOptions() {}
}

class BooleanQuestions extends Question {
    printQuestionOptions() {
        console.log('1. True')
        console.log('2. False')
    }
}

class FreeAnswerQuestions extends Question {
    printQuestionOptions() {
        console.log('Your answer: ________')
    }
}

class MultipleChoice extends Question {
    constructor(description, options){
        super(description)
        this.options = options
    }
    
    printQuestionOptions() {
        this.options.forEach((option, index) => {
            console.log(`${index}: ${option}`)
        })
    }
}

function printQuestions(questions) {
    questions.forEach((question) => {
        console.log(question.description)
        question.printQuestionOptions()
    })
}

const questions = [ 
    new BooleanQuestions('Lotus is currently racing in F1'),
    new FreeAnswerQuestions(`Who's racing for McLaren in 2025?`),
    new MultipleChoice('Who is the driver with more wins on a single circuit?',
        ['1. Lewis Hamilton', '2. Michael Schumacher', '3. Max Verstappen']
    )
]

printQuestions(questions)