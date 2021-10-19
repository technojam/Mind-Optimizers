var quizForm = document.querySelector(".quiz-form");
var btn = document.querySelector(".submit");
var output = document.querySelector(".otp");

const correctAnswers =['No', 'No, this is not true', 'Yes, it feels good', 'Naah, that is bullshit!', 'Yes that is so true'];

function calculateTheScore(){
    var index=0;
    var score=0;

    var data = new FormData(quizForm);
    for(var option of data.values()){
       if(option == correctAnswers[index]){
           score= score +2;
       }
       index = index +1;
    }
    output.innerHTML = "Score: "+ score + "/10";
    output.style.fontSize = "2rem";
}

btn.addEventListener("click", calculateTheScore);