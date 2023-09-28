let question = [
    {
        'que': "2.Which of the following keywords is used to define a variable in Javascript?",
        'a': "var",
        'b': "let",
        'c': "A & B both",
        'd': "const",
        'correct': "c"
    },
    {
        'que': "2.Which one of the following also known as Conditional Expression:",
        'a': "Alternative to if-else",
        'b': "Switch statement",
        'c': "If-then-else statement",
        'd': "immediate if",
        'correct': "d"
    },
    {
        'que': "3.When interpreter encounters an empty statements, what it will do:",
        'a': "Shows a warning",
        'b': "Prompts to complete the statement",
        'c': "Throws an error",
        'd': "Ignores the statements",
        'correct': "d"
    }
]


let index = 0;
let total = question.length;
right = 0;
wrong = 0;
let sawal = document.getElementById('quee')
let ans = document.querySelectorAll('.topi');

let loadquestion = () => {
    if (index == total) {
        return endquiz()
    }
    else {
        rest();
    }

    let data = question[index]
    sawal.innerHTML = data.que
    ans[0].nextElementSibling.innerText = data.a;
    ans[1].nextElementSibling.innerText = data.b;
    ans[2].nextElementSibling.innerText = data.c;
    ans[3].nextElementSibling.innerText = data.d;


}
let submitquestion = () => {
    let data = question[index]
    let dasa = checkque()
    if (dasa === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadquestion();
    return;

}



let checkque = () => {
    let answer;
    ans.forEach((optp) => {
        if (optp.checked) {
            answer = optp.value

        }
    });
    return answer;
}
let endquiz = () => {
    document.getElementById("box").innerHTML = `
        <h1>Thanks for playing the quiz</h1>
         <h2>Scorse : ${right} / ${wrong}</h2>
        `
}

let rest = () => {
    ans.forEach((optp) => {
        optp.checked = false;
    })
}

loadquestion();

