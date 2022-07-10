'use strict'
//Changing the colour of the reset button:
//use the if statement; if there are values in the input fields then change the background colour to
//strong cyan
//On reset, change the values of the input fields, and results back to 0 and change the reset button 
//background back to dark cyan
//tip = bill * tip percentage
//tip per person = (bill * tip percentage) / number of people
//total per person = (bill / number of people) + tip per person
//Error message will be displayed in the second label for each input field
//if no number is entered or the value entered is invalid, display "Can't be zero"
//add hidden class and display it to none. When the error occurs it will switch to inline-block
//and the message will be displayed
//values = +value.replace("%","")

const bill = document.querySelector("#bill");
const numberOfPeople = document.querySelector("#people");
const tipPerson = document.querySelector(".tip");
const totalPerson = document.querySelector(".total");
const resetButton = document.querySelector("#reset");
const calculateButton = document.querySelector("#calculator");
const tipButton = document.querySelectorAll(".bill-tip-btn");

//Reset
resetButton.addEventListener("click", function(btn){
    btn.target.style.backgroundColor = "hsl(184, 14%, 56%)";
    btn.target.style.color = "hsl(186, 14%, 43%)";
    tipPerson.textContent = "$0.00";
    totalPerson.textContent = "$0.00";
    bill.value = 0;
    numberOfPeople.value = 0;
})

    //Bill
    const cash = bill.addEventListener("change", ()=>{
        return Number(bill.value); 
    });

    //Tip
    let tipPercentage = tipButton.forEach(function(tipbtn){
        tipbtn.addEventListener("click", function(){
            if(tipbtn.classList.contains("custom")){  
                this.addEventListener("change", function(){
                    return Number(tipbtn.value/100);
                })    
            } else{
                return Number((tipbtn.value.replace("%", ""))/100);
            }
        })
    })

    const people = numberOfPeople.addEventListener("change", ()=> {
        return Number(numberOfPeople.value);
    });

const calcFunction = function(){
    tipPerson.textContent = String(tipPercentage / people);
    totalPerson.textContent = String((cash + (cash * tipPercentage))/people);
};

calculateButton.addEventListener("click", calcFunction);
