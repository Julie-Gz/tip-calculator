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
const calculateButton = document.querySelector("#calculate");
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
    let cash = 0;
    bill.addEventListener("input", ()=>{
        cash = Number(bill.value);
        console.log(typeof cash, cash);
        return cash; 
    });

    //Tip
    let tipPercentage = 0;
    tipButton.forEach(function(tipbtn){
        tipbtn.addEventListener("click", function(){
            if(tipbtn.classList.contains("custom")){  
                this.addEventListener("input", function(){
                    tipPercentage = Number(tipbtn.value) / 100;
                    console.log(typeof tipPercentage, tipPercentage);
                    return tipPercentage;
                })    
            } else{
                tipPercentage = Number((tipbtn.value.replace("%","")))/100;
                console.log(typeof tipPercentage, tipPercentage);
                return tipPercentage;
            }
        })
    })

    let people = 0;
    people = numberOfPeople.addEventListener("input", ()=> {
        console.log(typeof people, people);
        return Number(numberOfPeople.value);   
    });

const calcFunction = function(){
    let tipPerPerson = tipPercentage/people;
    let totalPerPerson = (cash + (cash * tipPercentage))/people;
    console.log(typeof tipPerPerson, tipPerPerson);
    console.log(typeof totalPerPerson, totalPerPerson);
    //tipPerson.textContent = Number.isNaN(tipPercentage / people);
    //totalPerson.textContent = Number.isNaN((cash + (cash * tipPercentage))/people);
};

calculateButton.addEventListener("click", calcFunction);
