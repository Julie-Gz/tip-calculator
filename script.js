'use strict'
const bill = document.querySelector("#bill");
const numberOfPeople = document.querySelector("#people");
const tipPerson = document.querySelector(".tip");
const totalPerson = document.querySelector(".total");
const resetButton = document.querySelector("#reset");
const tipButton = document.querySelectorAll(".bill-tip-btn");

//Variables for calculation
let cash = 0;
let tipPercentage = 0;
let people = 0;
let tp = 0; //tip
let ttl = 0;//total

//Reset
resetButton.addEventListener("click", function(btn){
    btn.target.style.backgroundColor = "hsl(184, 14%, 56%)";
    btn.target.style.color = "hsl(186, 14%, 43%)";
    tipPerson.textContent = "$0.00";
    totalPerson.textContent = "$0.00";
    bill.value = "";
    numberOfPeople.value = "";
})

    //Bill
    bill.addEventListener("input", ()=>{
        cash = Number(bill.value);
        return cash; 
    });

    //Tip
    tipButton.forEach(function(tipbtn){
        tipbtn.addEventListener("click", function(){
            if(tipbtn.classList.contains("custom")){  
                this.addEventListener("input", function(){
                    tipPercentage = Number(tipbtn.value) / 100;
                    return tipPercentage;
                })    
            } else{
                tipPercentage = Number((tipbtn.value.replace("%","")))/100;
                return tipPercentage;
            }
        })
    })

    numberOfPeople.addEventListener("input", ()=> {
        people = Number(numberOfPeople.value);
        return people;   
    });


//Calculation
    document.addEventListener("input", function(){
        //Calculating the total(ttl) and tip(tp)
        ttl=(cash + (cash * tipPercentage))/people;
        tp=(tipPercentage*cash) / people;

        //Placed conditional statement to prevent NaN result
        if(Number.isNaN(ttl) || Number.isNaN(tp)){
            tipPerson.textContent = "$0.00";
            totalPerson.textContent = "$0.00"
        } else{
            tipPerson.textContent = "$"+tp.toFixed(2);
            totalPerson.textContent = "$"+ttl.toFixed(2);
        }

        //Changing the color and background color of the reset button 
        resetButton.style.backgroundColor = "hsl(172, 67%, 45%)";
        resetButton.style.color = "hsl(183, 100%, 15%)";
    });


  //Detect if the user deleted their input
    // bill.onkeyup = function(val){
    //     if(val.length==0){
    //         document.querySelector(".bill-alert").style.opacity = 1;
    //     }
    // }
    // numberOfPeople.onkeyup = function(n){
    //     if(n.length==0){
    //         document.querySelector(".people-alert").style.opacity = 1;
    //     }
    // }

    // bill.addEventListener("keydown",(e)=>{
    //     if(e.key === "Backspace" && cash.length == 0){
    //         document.querySelector(".bill-alert").style.opacity = 1;
    //         console.log(e);
    //     } 
    // })
    //numberofPeople.addEventListener("keydown", (e)=>{
        //if(e.key === "Backspace" && people.length == 0){
            //document.querySelector(".people-alert").style.opacity = 1;
            //console.log(e);
        //} 
    //})