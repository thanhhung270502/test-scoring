const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const form = $('.form-content');
const btn__submitNumber = $(".btn-submit");
const number = $('.socau');

btn__submitNumber.onclick = () => {
    var n = number.value;
    form.textContent = '';
    for (let i = 1; i <= n; i++) {
        // Question
        var question = document.createElement("div");
        question.setAttribute('class', 'question');
        question_value = "Câu " + `${i}`;
        question.textContent = question_value;
    
        // Answer A
        var radi_A = document.createElement("input");
        radi_A.setAttribute('type', 'radio');
        radi_A.setAttribute('value', 'A');
        let name_value = "ques" + i;
        radi_A.setAttribute('name', name_value);
        
        var answerA = document.createElement("div");
        answerA.setAttribute('class', 'd-flex flex-column align-items-center answer');
    
        inner__answerA = document.createElement("div");
        inner__answerA.textContent = "A";
        answerA.appendChild(radi_A);
        answerA.appendChild(inner__answerA)
    
        // Answer B
        var radi_B = document.createElement("input");
        radi_B.setAttribute('type', 'radio');
        radi_A.setAttribute('value', 'B');
        let name_value_B = "ques" + i;
        radi_B.setAttribute('name', name_value_B);
    
        var answerB = document.createElement("div");
        answerB.setAttribute('class', 'd-flex flex-column align-items-center answer');
    
        inner__answerB = document.createElement("div");
        inner__answerB.textContent = "B";
        answerB.appendChild(radi_B);
        answerB.appendChild(inner__answerB)
    
        // Answer C
        var radi_C = document.createElement("input");
        radi_C.setAttribute('type', 'radio');
        radi_A.setAttribute('value', 'C');
        let name_value_C = "ques" + i;
        radi_C.setAttribute('name', name_value_C);
    
        var answerC = document.createElement("div");
        answerC.setAttribute('class', 'd-flex flex-column align-items-center answer');
    
        inner__answerC = document.createElement("div");
        inner__answerC.textContent = "C";
        answerC.appendChild(radi_C);
        answerC.appendChild(inner__answerC);
    
        // Answer D
        var radi_D = document.createElement("input");
        radi_D.setAttribute('type', 'radio');
        radi_A.setAttribute('value', 'D');
        let name_value_D = "ques" + i;
        radi_D.setAttribute('name', name_value_D);
    
        var answerD = document.createElement("div");
        answerD.setAttribute('class', 'd-flex flex-column align-items-center answer');
    
        inner__answerD = document.createElement("div");
        inner__answerD.textContent = "D";
        answerD.appendChild(radi_D);
        answerD.appendChild(inner__answerD)
    
        // Place
        var place = document.createElement("div");
        place.setAttribute("class", "form-custom d-flex align-items-start");
        place.appendChild(question);
        place.appendChild(answerA);
        place.appendChild(answerB);
        place.appendChild(answerC);
        place.appendChild(answerD);
    
        var outer__place = document.createElement("div");
        outer__place.setAttribute("class", "col-3 form");
        outer__place.appendChild(place)
    
        form.appendChild(outer__place);
    }
}
var code = $('.code');
code.onchange = () => {
    if (code.value > 10000) {
        code.value = parseInt(code.value.toString().substring(0,4));
    }
    else if (code.value < 0) {
        code.value = Math.abs(code.value)
        if (code.value > 10000) {
            code.value = parseInt(code.value.toString().substring(0,4));
        }
    }
}

function clear__form() {
    form.textContent = '';
}
