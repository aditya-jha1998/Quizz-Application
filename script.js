const myQuestion = [
  {
    Question: "Q1.What is the full form of HTML",
    a: "Hello to My land",
    b: "Hey Text Markup language",
    c: "Hyper text Markup language",
    d: "HyperText Markup language",
    ans: "ans4",
  },
  {
    Question: "Q2. Inside which HTML element do we put the JavaScript?",
    a: "<scripting>",
    b: "<script>",
    c: "<javascript>",
    d: "<js>",
    ans: "ans2",
  },
  {
    Question:
      "Q3. A HTML tag that specifies some extra information about an element is named to be",
    a: "Style",
    b: "Alt",
    c: "title",
    d: "id",
    ans: "ans3",
  },
  {
    Question: "Q4. Inside which HTML element do we put the JavaScript?",
    a: "<scripting>",
    b: "<script>",
    c: "<javascript>",
    d: "id",
    ans: "ans2",
  },
  {
    Question:
      "Q5. A HTML tag that specifies an inline css style for an element is called?",
    a: "Design",
    b: "style",
    c: "modifiy",
    d: "define",
    ans: "ans2",
  },
  {
    Question: "Q6.HTML element Know to be <ins>, define ",
    a: "Incapsulation",
    b: "Insertion",
    c: "Instance",
    d: "Instantiation",
    ans: "ans2",
  },
  {
    Question: "Q7.What is the full form of css ?",
    a: "Cascading style sheet",
    b: "case style sheet",
    c: "none of them",
    d: "style sheet",
    ans: "ans1",
  },
  {
    Question: "Q8. What is the full form of oops?",
    a: "Object  programming",
    b: "functional programming",
    c: "Procedural oriented programming",
    d: "object oriented programming",
    ans: "ans4",
  },
  {
    Question: "Q9.In html element define the table heading ?",
    a: "<style>",
    b: "<head>",
    c: "<thead>",
    d: "<th>",
    ans: "ans4",
  },
  {
    Question:
      "Q10. What’s the name of the user who connects to the  Web site anonymously??",
    a: "IUSR",
    b: "computername",
    c: "IUSR_computername",
    d: "pratret",
    ans: "ans3",
  },
];

const question = document.querySelector("#questionin");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
let answers = document.querySelectorAll(".answer");
const submit = document.querySelector(".butt");
const displayresult = document.querySelector(".display-result");
const finalScore = document.querySelector(".score");
const playagain = document.querySelector("#playagain");

let questionNumber = 0;
let score = 0;
function questionLoading() {
  question.textContent = myQuestion[questionNumber].Question;
  option1.textContent = myQuestion[questionNumber].a;
  option2.textContent = myQuestion[questionNumber].b;
  option3.textContent = myQuestion[questionNumber].c;
  option4.textContent = myQuestion[questionNumber].d;
}
questionLoading();

const ResetQuizz = function () {
  questionNumber = 0;
  score = 0;
  questionLoading();
  displayresult.classList.add("hidden");
  document.getElementById("maincontent").style.backgroundColor = "#7ca6a6";
};

const getAnswerWithMathchingId = function () {
  let answer;

  answers.forEach((getCurrElement) => {
    if (getCurrElement.checked) {
      answer = getCurrElement.id;
    }
  });

  return answer;
};

submit.addEventListener("click", function () {
  let checkAnswer = getAnswerWithMathchingId();
  console.log(checkAnswer);
  console.log(answers.value);
  if (checkAnswer == myQuestion[questionNumber].ans) {
    score++;
  }
  questionNumber++;
  if (questionNumber < myQuestion.length) {
    questionLoading();
  } else {
    if (score == 0) {
      finalScore.textContent = `Better Luck Next Time : ${score}/${myQuestion.length} 🎉🎉`;
      document.getElementById("generateScore").style.backgroundColor =
        "firebrick";
      document.getElementById("maincontent").style.backgroundColor = "#ff8000";
    } else {
      if (score > 7) {
        finalScore.textContent = `Congratualtion!!! You are a Winner Score: ${score}/${myQuestion.length} 🥇🥇🎉🎉`;
        document.getElementById("generateScore").style.backgroundColor = "red";
        document.getElementById("maincontent").style.backgroundColor =
          "	#00ffbf";
      } else {
        finalScore.textContent = `your Quizz performance is : ${score}/${myQuestion.length} 🎉🎉`;
        document.getElementById("generateScore").style.backgroundColor =
          "green";
        document.getElementById("maincontent").style.backgroundColor =
          "#bfff00";
      }
    }
    // score == 0
    // ? (finalScore.textContent = `Better Luck Next Time : ${score}/${myQuestion.length} 🎉🎉`)

    // :(finalScore.textContent = `your Quizz performance is : ${score}/${myQuestion.length} 🎉🎉`);

    displayresult.classList.remove("hidden");
    playagain.addEventListener("click", ResetQuizz);
  }
});
