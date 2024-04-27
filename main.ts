#! /usr/bin/env node

import inquirer from "inquirer"

let name = await inquirer.prompt(
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    }
)

console.log(`\n\t\t Hello ${name.name}!\n`)

let ask = await inquirer.prompt(
{
    type: "list",
    name: "day",
    message: "What day is it?",
    choices: ["Monday","Tuesday","Wednesday","Thursday","Friday","Weekend"]

})

switch (ask.day) {
    case "Monday":
        console.log("Today is Monday");
        console.log("Its The Start Of Week Just Start The Work");
    break;

    case "Tuesday":
        console.log("Today is Tuesday");
        console.log("Here's The Second Day Of Week,Keep Working")
    break;

    case "Wednesday":
        console.log("Today is Wednesday");
        console.log("Here's The Third Day Of Week,Keep Working")
    break;

    case "Thursday":
        console.log("Today is Thursday");
        console.log("Here's The Fourth Day Of Week,Keep Working")
    break;

    case "Friday":
        console.log("Today is Friday");
        console.log("Here's The Fifth Day Of Week,Just Last Day OF Working")
    break;

    case "Weekend":
        console.log("Today is Weekend");
        console.log("Enjoy The Two Days")
    break;

    default:
        console.log("Invalid Input");
        break;
}