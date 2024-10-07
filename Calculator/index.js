//calculator program ;3
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specicalChars= ["%","*","/","-","+","="];
let output= "";

const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== ""){
        output = eval(output.replace("%","/100"))
    } else if (btnValue === "AC"){
        output = "";
    } else if (btnValue === "DEL"){
        output = output.toString().slice(0,-1);
    } else{
        if (output === "" && specicalChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value= output;
};
 
buttons.forEach(button=>{
    button.addEventListener("click", (a)=> calculate(a.target.dataset.value));
});