let questions=[
    {
        id: 1,
        question:"What is the name of Black Panther's kingdom?",
        answer: "Wakanda",
        options:["Makanda", "Wakanda", "Wkamyoing", "Hong Kong"]
    },
    {
        id:2,
        question:"Who's the father of Thanos?",
        answer: "A ' lars",
        options: ["A'lars", "Kar Uhn", "El Borro nr", "I. Will Havastroke"]
    },
    {
        id:3,
        question:"Who is Thor's mother?",
        answer: "Frigga",
        options: ["Queen Humosthis", "Karen Willoughby", "Agrier", "Frigga"]
    }, 
    {
        id:4,
        question:"What was Captain America's height before he was given the Super Soldier's Serum?",
        answer: "5'1",
        options: ["6'1", "4'31", "5'1", "4'9"]
    }, 
    {
        id:5,
        question:"What is the name of the Dwarf on Nidavellir?",
        answer: "Eitri",
        options: ["Malsh", "Aegir", "Old Man Bulloughy", "Eitri"]
    },
    {
        id:6,
        question:"Finish this line from Captain America: Hulk _____",
        answer: "Smash",
        options: ["Punch", "Havoc", "Smash", "Crunch"]
    }
]

let value=JSON.stringify(questions)
localStorage.setItem("question",value)

let question_count = 0
let points = 0

window.onload = function (){
    show(question_count)
}

function show(count){
    let question=document.getElementById("questions")
    let [first,second,third,fourth]=questions[count].options
    question.innerHTML =` 
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
<li class="option">${first}</li>
<li class="option">${second}</li>
<li class="option">${third}</li>
<li class="option">${fourth}</li>
</ul>
`

toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
    for (let i = 0; i < option.length; i++) {
    if (option[i].classList.contains("active"))
    {
    option[i].classList.remove("active");
    }
    }
    option[i].classList.add("active");
    };
    }
    }


    function next(){
        if(question_count == questions.length - 1 ){
        location.href = "./end.html"
        }
        
        let user_answer=document.querySelector("li.option.active").innerHTML
        if(user_answer == questions[question_count].answer){
        points +=1
        sessionStorage.setItem("points",points)
        } else{
        points +=0
        sessionStorage.setItem("points",points)
        }
        question_count++
        show(question_count)
        }