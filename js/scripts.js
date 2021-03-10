const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
  const output = [];
  myQuestions.forEach(
    (currentQuestion, questionNumber) =>{
      const answers = [];
      for(letter in currentQuestion.answers){
        answers.push(
          <label>
            <input type="radio" name="questions${questionNumber}" value="${letter}"></input>
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>
        );
      }
      answers.push(
        <label>
          <input type="radio" name="questions${questionNumber}" value="${letter}"></input>
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
    );
  }
);

quizContainer.innerHTML = output.join('');
}

myQuestions.forEach( (currentQuestion, questionNumber) => {
});

buildQuiz();

submitButton.addEventListener('click', showResults);

const myQuestions = [
  {
    question: "Who you gonna call?",
    answers: {
      a: "Flanders",
      b: "Your family",
      c: "Ghost Busters"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these does not belong?",
    answers: {
      a: "sally sails soundly",
      b: "sals screens sell short supply",
      c: "sammy scrubs some sails"
    },
    correctAnswer: "b"
  },
  {
    question: "Pick One?",
    answers: {
      a: "One",
      b: "Two",
      c: "Three",
      d: "Four"
    },
    correctAnswer: "a"
  }
];