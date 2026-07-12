let topic = document.querySelector(".topics");
let container = document.querySelector(".container");

let start = document.getElementById("startBtn");
let username = document.getElementById("username");
let nameBox = document.querySelector(".name-box");

let cpp = document.getElementById("cpp");
let java = document.getElementById("java");
let web = document.getElementById("web");
let dsa = document.getElementById("dsa");


// Quiz elements
let quiz = document.getElementById("quiz");
let question = document.querySelector(".question");
let options = document.querySelector(".option");
let nextBtn = document.querySelector(".next");


// Hide initially
container.hidden = true;
quiz.hidden = true;



// Questions

let cppQuestions = [
{
question: "Which symbol is used to end a C++ statement?",
options: [";", ":", ".", ","],
answer: ";"
},
{
question: "Which keyword is used to create a class in C++?",
options: ["class", "struct", "new", "object"],
answer: "class"
},
{
question: "Which function is the entry point of C++ program?",
options: ["main()", "start()", "run()", "execute()"],
answer: "main()"
},
{
question: "Which operator is used for dynamic memory allocation?",
options: ["malloc", "new", "create", "alloc"],
answer: "new"
},
{
question: "Which concept allows same function name with different parameters?",
options: ["Inheritance", "Encapsulation", "Function Overloading", "Abstraction"],
answer: "Function Overloading"
},
{
question: "Which keyword is used to inherit a class in C++?",
options: ["extends", "inherits", ":", "implements"],
answer: ":"
},
{
question: "Which OOP concept hides data?",
options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"],
answer: "Encapsulation"
},
{
question: "Which symbol is used with pointer variables?",
options: ["#", "*", "&", "%"],
answer: "*"
},
{
question: "Destructor name starts with which symbol?",
options: ["!", "~", "#", "&"],
answer: "~"
},
{
question: "Which header file is used for input/output in C++?",
options: ["iostream", "stdio", "input", "stream"],
answer: "iostream"
}
];



let javaQuestions = [
{
question: "Who developed Java?",
options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido"],
answer: "James Gosling"
},
{
question: "Which keyword is used for inheritance in Java?",
options: ["extends", "inherits", "super", "class"],
answer: "extends"
},
{
question: "Java is a ____ language.",
options: ["Object-Oriented", "Markup", "Assembly", "Database"],
answer: "Object-Oriented"
},
{
question: "Which method is the starting point of Java program?",
options: ["start()", "main()", "run()", "begin()"],
answer: "main()"
},
{
question: "Which keyword creates an object in Java?",
options: ["create", "object", "new", "make"],
answer: "new"
},
{
question: "Which collection stores unique values?",
options: ["ArrayList", "HashSet", "LinkedList", "Vector"],
answer: "HashSet"
},
{
question: "Which keyword is used to define a class?",
options: ["class", "Class", "define", "object"],
answer: "class"
},
{
question: "Java source code is converted into?",
options: ["Machine code", "Bytecode", "HTML", "Binary only"],
answer: "Bytecode"
},
{
question: "Which keyword prevents inheritance?",
options: ["static", "final", "private", "constant"],
answer: "final"
},
{
question: "Which symbol is used for comments in Java?",
options: ["//", "#", "<!--", "**"],
answer: "//"
}
];

let webQuestions = [
{
question: "HTML stands for?",
options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Language", "Home Tool Language"],
answer: "Hyper Text Markup Language"
},
{
question: "Which CSS property changes text color?",
options: ["color", "font-color", "text-color", "background"],
answer: "color"
},
{
question: "Which keyword declares a variable in JavaScript?",
options: ["let", "int", "string", "define"],
answer: "let"
},
{
question: "Which tag is used for JavaScript?",
options: ["<script>", "<js>", "<javascript>", "<code>"],
answer: "<script>"
},
{
question: "Which HTML tag creates a paragraph?",
options: ["<p>", "<h1>", "<para>", "<text>"],
answer: "<p>"
},
{
question: "CSS stands for?",
options: ["Cascading Style Sheets", "Computer Style System", "Creative Style Syntax", "Colorful Style Sheets"],
answer: "Cascading Style Sheets"
},
{
question: "Which method prints output in JavaScript?",
options: ["console.log()", "print()", "echo()", "display()"],
answer: "console.log()"
},
{
question: "Which HTML tag is used for images?",
options: ["<img>", "<image>", "<pic>", "<src>"],
answer: "<img>"
},
{
question: "Which CSS property changes background color?",
options: ["background-color", "color", "bg", "background-style"],
answer: "background-color"
},
{
question: "Which symbol is used for ID selector in CSS?",
options: [".", "#", "*", "&"],
answer: "#"
}
];



let dsaQuestions = [
{
question: "Which data structure follows FIFO?",
options: ["Queue", "Stack", "Tree", "Graph"],
answer: "Queue"
},
{
question: "Which data structure follows LIFO?",
options: ["Stack", "Queue", "Array", "Tree"],
answer: "Stack"
},
{
question: "Binary search time complexity is?",
options: ["O(log n)", "O(n)", "O(n²)", "O(1)"],
answer: "O(log n)"
},
{
question: "Which data structure stores elements sequentially?",
options: ["Array", "Tree", "Graph", "Heap"],
answer: "Array"
},
{
question: "Which traversal visits root first?",
options: ["Preorder", "Inorder", "Postorder", "Level Order"],
answer: "Preorder"
},
{
question: "Which data structure is used in recursion?",
options: ["Stack", "Queue", "Array", "Graph"],
answer: "Stack"
},
{
question: "Linked list nodes contain?",
options: ["Data and pointer", "Only data", "Only pointer", "Index"],
answer: "Data and pointer"
},
{
question: "Which algorithm is used for shortest path?",
options: ["Dijkstra", "DFS", "Binary Search", "Merge Sort"],
answer: "Dijkstra"
},
{
question: "Average time complexity of quick sort is?",
options: ["O(n log n)", "O(n²)", "O(n)", "O(1)"],
answer: "O(n log n)"
},
{
question: "Which structure is used in BFS traversal?",
options: ["Queue", "Stack", "Tree", "Array"],
answer: "Queue"
}
];


let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];




// Start Button

start.addEventListener("click", () => {

    if (username.value.trim() == "") {

        alert("Name is required");

    } else {
        

        container.hidden = false;

        nameBox.style.display = "none";


        let h2 = document.createElement("h2");

        h2.innerText = "Hello " + username.value + "!";
        h2.style.fontSize = "30px";
        document.body.appendChild(h2);


        h2.style.position = "absolute";
        h2.style.top = "10px";
        h2.style.left = "20px";

    }

});



 let answered = false;
// Show Question

function showQuestion() {
answered = false;
    let q = selectedQuestions[currentQuestion];

    question.innerText = q.question;

    options.innerHTML = "";

   

    q.options.forEach((opt) => {

        let btn = document.createElement("button");
        btn.innerText = opt;

        btn.addEventListener("click", () => {

            if (answered) return;
            answered = true;

            let allButtons = options.querySelectorAll("button");

            allButtons.forEach((button) => {
                button.disabled = true;
            });

            if (opt === q.answer) {

                btn.style.background = "green";
                score++;

            } else {

                btn.style.background = "red";

                // Show correct answer
                allButtons.forEach((button) => {
                    if (button.innerText === q.answer) {
                        button.style.background = "green";
                    }
                });

            }

        });

        options.appendChild(btn);

    });

}



// Function for topic selection

function startQuiz(data) {

    topic.style.display = "none";

    quiz.hidden = false;

    selectedQuestions = data;

    currentQuestion = 0;

    score = 0;

    showQuestion();

}




// Buttons

cpp.addEventListener("click", () => {
    startQuiz(cppQuestions);
});


java.addEventListener("click", () => {
    startQuiz(javaQuestions);
});


web.addEventListener("click", () => {
    startQuiz(webQuestions);
});


dsa.addEventListener("click", () => {
    startQuiz(dsaQuestions);
});




// Next Button

nextBtn.addEventListener("click", () => {

   if (!answered) {
    alert("Select an option first!");
    return;
}

currentQuestion++;

    if (currentQuestion < selectedQuestions.length) {

        showQuestion();

    } else {

        quiz.innerHTML = `
            <h1>🎉 Quiz Finished</h1>
            <h2>Your Score: ${score}/${selectedQuestions.length}</h2>
            
        `;


    }

});
