let score = 0;

const questions = [
  {
    q: "What is JavaScript?",
    options: ["Programming Language", "Markup Language", "Database", "OS"],
    answer: "Programming Language"
  },
  {
    q: "Who developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape"
  },
  {
    q: "Which keyword is used to declare a variable in JavaScript?",
    options: ["int", "var", "string", "define"],
    answer: "var"
  }
];

let index = 0;

let container = document.createElement("div");
document.body.appendChild(container);

function showQuestion() {
  container.innerHTML = "";

  let q = document.createElement("h1");
  q.innerText = questions[index].q;
  container.appendChild(q);

  questions[index].options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.style.display = "block";
    btn.style.margin = "10px auto";
        btn.style.backgroundColor = "#28a745";
btn.style.color = "white";
btn.style.padding = "10px 20px";
btn.style.border = "none";
btn.style.borderRadius = "8px";
btn.style.cursor = "pointer";
btn.style.display = "block";
btn.style.margin = "20px auto";
btn.style.fontSize = "16px";
btn.style.fontWeight = "bold";
    btn.onclick = () => {
         
      if (opt === questions[index].answer) {
        score++;
      }
         // Sab option buttons disable
        let allButtons = container.querySelectorAll("button");
        allButtons.forEach(button => {
            if (button.innerText !== "NEXT") {
                button.disabled = true;
            }
        });
    };

    container.appendChild(btn);
  });

  let next = document.createElement("button");
  next.innerText = "NEXT";
next.style.display="block";
next.style.margin = "10px auto";
next.style.backgroundColor = "blue";
next.style.color = "white";
next.style.padding = "10px 20px";
next.style.border = "none";
next.style.borderRadius = "8px";
next.style.cursor = "pointer";
next.style.display = "block";
next.style.margin = "20px auto";
next.style.fontSize = "16px";
next.style.fontWeight = "bold";
  next.onclick = () => {
    index++;
    if (index < questions.length) {
      showQuestion();
    } else {
     container.innerHTML = `<h2 style="color:blue;" "text-align:center">Score: ${score}</h2>`;
    }
  };

  container.appendChild(next);
}

// start button
document.querySelector("button").addEventListener("click", () => {
  showQuestion();
});