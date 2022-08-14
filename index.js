// section 3, lesson 1: building a blackjack game 
// create two variables, firstCard amd secondcard, set their values to a radom number from 2-11
// create a variable. sum, and set it to the sum of the two cards.

// let firstCard = 6
// let secondCard = 11
// let sum = firstCard + secondCard
// console.log(sum)

// lesson 2:
// if...else conditions

// let firstCard = 21
// let secondCard = 11
// let sum = firstCard + secondCard
// console.log(sum)

// if (sum < 21) {
//     console.log('do you want another card? ')
// } else if (sum === 21) {
//     console.log("wohoo! you've won the blackjack!")
// }else if (sum > 21) {
//     console.log("oops! you're out of the game!")
// }

// lesson 3:
// check if the person is old enough to enter the nightclub (21)
// lo a suitable message to the console in both cases 
// if less than 21 -> "you can not enter the club"
// else            -> "welcome!"


// let age = 18
// let firstPerson = 18
// let secondPerson = 21
// let thirdPerson = 22

// if (age < 21) {
//     console.log("you cannot enter the club!")
// }else {
//     console.log("welcome!")
// }


// lesson 4: 
// check if the person is eligible to get a birthday card from the king! (100)
// if less than 100    -> "Not Eligible!"
// else if exactly 100 -> "Here is your birthday card from the king!"
// else                -> "Not Eligible! you have already gotten one!"

// let age = 101
// if (age < 100) {
//     console.log("Not Eligible!")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the king!")
// }else {
//     console.log("Not Eligible! you have already gotten one!")
// }


// lesson 5:
// write the conditional according to these rules:
// if less than or equal to 20 -> "Do you want to draw another card?"
// else if exactly 21          -> "wohoo! you've won the blackjack!"
// else                        -> "you're out of the game!"

// let firstCard = 10
// let secondCard = 9
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true

// if (sum <= 20) {
//     console.log("Do you want to draw another card?")
// }else if (sum === 21) {
//     console.log("wohoo! you've won the blackjack!")
//     hasBlackJack = true
// }else {
//     console.log("you're out of the game!")
//     isAlive = false
// }
// console.log(hasBlackJack)
// console.log(isAlive)



// lesson 6: 
// practicing boolean conditions
// predict if wether true or false is logged out of the console

// console.log(4 === 3)  //false
// console.log(5 > 2)  //true
// console.log(12 > 12)  //false
// console.log(3 < 0) //false
// console.log(11 <= 11) //true
// console.log(3 <= 2) //false
// console.log(3 >= 3) //true

// lesson 7:
// let firstCard = 10
// let secondCard = 9
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// //  1. declare a variable called message and assign its value toan empty string
// let message = ''

// //  2. reassign the messagevariable tothe string we're logging out
// if (sum <= 20) {
//         message = "Do you want to draw another card?"
//     }else if (sum === 21) {
//         message = "wohoo! you've won the blackjack!"
//         hasBlackJack = true
//     }else {
//         message = "you're out of the game!"
//         isAlive = false
//     }
//     console.log(hasBlackJack)
//     console.log(isAlive)
//     console.log(message)



let firstCard = 10
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false 
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let startEl = document.getElementById('start-el')

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw another card?"
        }else if (sum === 21) {
        message = "wohoo! you've won the blackjack!"
        hasBlackJack = true
        }else {
        message = "you're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

button.addEventListener('click', startGame)
























































































