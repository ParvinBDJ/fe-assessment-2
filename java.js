const cursor = document.querySelector('.cursor');
const link = document.querySelectorAll('a');
const inactive = 'inactive';
const text = document.querySelector("#fade");
const textHTML = text.textContent;
const splitText = textHTML.split("");
const nameValidation = document.getElementById("firstname");
const form = document.getElementById("nameform");
const error = document.getElementById("error");

function moveCursor(e){

    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

}


document.addEventListener("mousemove", moveCursor);
text.textContent = "";
// Before we run this function we delete the original text within the H1
const save = splitText.map(x => text.innerHTML += "<span>" + x + "</span>");
// here i take every letter of the H1 and put it in a seperate span

let char = 0;
let timer = setInterval(whenOpen, 50);

function whenOpen(){
    const span = document.querySelectorAll("span")[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

if (form){
    form.addEventListener('submit', function validate(e){
        console.log(nameValidation.value.length);
        if(nameValidation.value.length < 4){
            error.innerHTML = "must be at least 4 charachters";
            console.log("error")
            e.preventDefault();
        } else{
            console.log("lekker bezig!");
        }
    })
} else{ 
    console.log("no form to validate")
}

