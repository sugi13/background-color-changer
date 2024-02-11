let ChangeBtn = document.getElementById('change-btn');
let HeaderText = document.getElementById('header');
let hex = '#';

function ChangeBgColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let res = hex + randomColor;
    HeaderText.innerText = `Background: ${res}`;
    HeaderText.style.width = `50%`;
    document.body.style.backgroundColor = res;
}

ChangeBtn.addEventListener('click', ChangeBgColor);