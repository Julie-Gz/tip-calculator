This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

This challenge is incomplete.
Here are some of the issues I encountered:

-I couldn't get the function to calculate as the numbers are being entered in the bill, tip, and number of 
people fields. I kept getting NAN as it was trying to calculate even when no data was being entered.
After many attempts at trying to change that I decided to add a caluclate button that will only start the
calculation when it's clicked which brings us to the next issue
-I added an event listener to the calculate button but I keep getting the error
"Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" and I still haven't found 
issue.

I will continue to come back to this challenge until I have completed it. Any help and tips are much 
appreciated but this is as far as I can go, for now.

///////////////////////////////////////////////////////////////////////////////

The issues above have been solved:

-The first issue was solved by adding an event listener to the document to listen for any inputs, that way calculations will take place only when there is data. 
To prevent the results from displaying NaN, I used an if statement to check if the result is a number or not using Number.isNaN(), if it returns true, the text content will remain $0.00, if it returns false, the results will be whatever the the values are, and with that the Calculate button is no longer needed.

-The second was because I misspelled the name of the variable, it was supposed to be "calculate", not "calculation", but it doesn't matter because it is not required anymore.

Additional updates:

-I created variables to hold the initial values for bill, numberOfPeople, and tipPercentage and then assigned
the calculated values to them and then used them for calculations.

-To make the alert message for when the fields are empty appear I used an event listener to listen for the backspace and an if statement that checks the length of the input field, if it is 0 it will display the alert message, but that didn't work and I am still looking for other methods. I commented out the two methods that I found so far.

For screens size 375px, the logo seems to be cutoff.

-I will come back to this challenge for more updates