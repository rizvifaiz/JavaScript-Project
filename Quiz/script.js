const questions = [
    {
        question:"which is the biggest animal in the world ? ",
        answer:[
            { text:"shark", correct:false},
            { text:"Blue Wheel", correct:true},
            { text:"Lion", correct:false},
            { text:"Elephent", correct:false}
        ]
    },

    {
        question:"which is the smallest continent in the world ? ",
        answer:[
            { text:"asia", correct:false},
            { text:"australia", correct:true},
            { text:"arctic", correct:false},
            { text:"africa", correct:false}
        ]
    },
    {
        question:"which is the smallest country in the world ? ",
        answer:[
            { text:"Vatican city", correct:true},
            { text:"Bhutan", correct:false},
            { text:"Nepal", correct:false},
            { text:"SriLanka", correct:false}
        ]  
    },

    {
        question:"which is the largest desert in the world ? ",
        answer:[
            { text:"antartica", correct:false},
            { text:"kalahari", correct:false},
            { text:"sahara", correct:true},
            { text:"gobi", correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const nextbtn = document.getElementById("next-btn")
const ansbtn = document.getElementById("answer-buttons")

let CuurentQueIndex = 0;
let score = 0;

 function startquiz(){
    CuurentQueIndex=0
    score=0
    nextbtn.innerHTML = "Next"
    showQuestion()
 }

 function showQuestion(){
    resetState();
    let currentQuestion = questions[CuurentQueIndex]
    let questionNo = CuurentQueIndex+1;
    questionElement.innerHTML = questionNo + "."+ currentQuestion.question;

    currentQuestion.answer.forEach(ans=>{
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        ansbtn.appendChild(button)
        if(ans.correct){
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
    
 }

 function resetState(){
    nextbtn.style.display = "none"
    while(ansbtn.firstChild){
        ansbtn.removeChild(ansbtn.firstChild)
    }
 }

  function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct==="true";
    if(isCorrect){
        selectedbtn.classList.add("correct")
        score++;
    }else{
        selectedbtn.classList.add("incorrect")
    }

    Array.from(ansbtn.children).forEach(button=>{
          if(button.dataset.correct=="true"){
            button.classList.add("correct")
          }
          button.disabled =  true;
    })
    nextbtn.style.display = "block"

  }

   function showscore(){
    resetState()
    questionElement.innerHTML = `your score is ${score} out of ${questions.length}!`
    nextbtn.innerHTML = "Play Again"
    nextbtn.style.display = "block"
   }

 function handleNextButton(){
    CuurentQueIndex++;
    if (CuurentQueIndex < questions.length){
        showQuestion();
    }else{
        showscore()
    }
 }


  nextbtn.addEventListener("click",()=>{
    if (CuurentQueIndex < questions.length){
        handleNextButton()
    }else{
        startquiz()
    }
  })

 startquiz();