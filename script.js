
let answer = 0;

function loadProblem() {
    let element = document.getElementById("problem");
    element.innerHTML="";
    let numberOfNumbers = Math.floor(Math.random() * 3) + 2;
    for(let i = 0; i < numberOfNumbers; i++) {
        let temp = Math.floor(Math.random() * 100);
        element.innerHTML += ("" + temp);
        answer += temp;
        if(i !== numberOfNumbers - 1) element.innerHTML += " + ";
    }
    console.log(answer);
}

function validateAnswer(userAnswer) {
    console.log(`${answer}, ${userAnswer}`);
    if(userAnswer == answer) {
        alert("Correct!");
        document.getElementById("answer").value = "";
        loadProblem();
        return false;
    } else {
        alert("Incorrect!");
        return false;
    }
}