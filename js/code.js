const answers_place = $(".answers");

for (let i = 1; i <= 120; i++) {
    // Question
    var question = document.createElement("div");
    question.setAttribute('class', 'question');
    question_value = "Câu " + `${i}`;
    question.textContent = question_value;

    // Answer 
    var number_random = Math.random() * 4;
    console.log(number_random);
    var answer = "A";
    if (number_random >= 1 && number_random < 2){
        answer = "B";
    }
    if (number_random >= 2 && number_random < 3){
        answer = "C";
    }
    if (number_random == 3 && number_random < 4){
        answer = "D";
    }

    var answer_place = document.createElement("div");
    answer_place.textContent = answer;

    var inner_place = document.createElement("div");
    inner_place.setAttribute("class", "d-flex");
    inner_place.appendChild(question);
    inner_place.appendChild(answer_place);

    // Place
    var place = document.createElement("div");
    place.setAttribute("class", "form-custom d-flex");
    place.appendChild(inner_place);

    var outer__place = document.createElement("div");
    outer__place.setAttribute("class", "col-2 form");
    outer__place.appendChild(place)

    answers_place.appendChild(outer__place);
}

var keys = $(".key");

const btn__delete = $(".btn-delete");
btn__delete.onclick = () => {
    keys.textContent = ""
}