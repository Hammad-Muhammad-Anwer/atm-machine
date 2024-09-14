#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 100000;
const myPin = 4761;

console.log("Welcome to your ATM made by Hammad Muhammad Anwer!");

let pinAnswer = await inquirer.prompt([
     {
       name: "PinNumber",
       message: "Enter Your Pin",
       type: "number"
     },
]);

if(pinAnswer.PinNumber === myPin){
    console.log("Pin Number is Valid");

let operationAns = await inquirer.prompt({
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw","check balance","fastcash (preset amounts)"],
     });

if(operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt({
         name: "amount",
         message: "enter your amount",
         type: "number"
     }); 

     if(amountAns.amount > myBalance){
        console.log("Insufficient Balance!");
     }else{

        myBalance -= amountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
     };   
}
else if (operationAns.operation === "check balance"){
    console.log("Your balance is:" + myBalance);
}
else if(operationAns.operation === "fastcash (preset amounts)"){
    let fastCashOptions = await inquirer.prompt({
        name: "fastcash",
        message: "Select a preset amount",
        type: "list",
        choices: ["5000","10000","20000"],
    });

    if(fastCashOptions.fastcash > myBalance){
        console.log(`Insufficient Balance ${fastCashOptions.fastcash}`);
    }else{
        myBalance -= fastCashOptions.fastcash;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
}
}else{
    console.log("Invalid Pin Number")
};