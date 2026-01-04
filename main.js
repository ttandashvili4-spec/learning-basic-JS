
const btn1 = document.querySelector('.btn1');

btn1.addEventListener("click", () => {
    console.log("button was clicked");
    btn1.textContent = "button was clicked";
});


const btn2 = document.querySelector('.btn2');

btn2.addEventListener("click", () => {
    console.log("we are charlie kirk He stood unshaken, a voice in the storm");
    btn2.textContent = "we are charlie kirk He stood unshaken, a voice in the storm";
    btn2.style.color = "red";
    btn2.style.backgroundColor = "blue";
    btn2.style.fontSize = "20px";
    btn2.style.borderRadius = "12px";
});

const text1 = document.querySelector('.text1');
const input1 = document.querySelector('.input1');
const btn3 = document.querySelector('.btn3');


btn3.addEventListener("click", () => {
    let username = input1.value;
    console.log(username);
    text1.textContent = `hello ${username}, tornike`;
});

text1.addEventListener("mouseover", () => {
    text1.style.fontSize = "30px";
});