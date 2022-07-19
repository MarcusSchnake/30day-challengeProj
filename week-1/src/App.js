import "./App.css";

import ChoiceDisplay from "./components/ChoiceDisplay";
import FightButton from "./components/FightButton";
import Result from "./components/Result";
import WeaponChoiceDisplay from "./components/WeaponChoiceDisplay";
import { useState } from "react";

/* Your objective is to create a rock, paper, and scissors game,
 * or your weapons of choice. No matter what the rules are
 * Rock -> Scissors, Paper -> Rock, Scissors-> Paper.
 * Use the App component to house all logic and traverse data through
 * props to children components. Each section will bring you closer
 * to finishing the game. Happy and Clean Coding!
 * Day 1: Determine & create your data structures and pass example props to your components 
 * Day 2: Make user choice display functional and logging to console **
 * Day 3: Make the computer determine a weapon and logging to the console **
 * Day 4: Make determineWinner between computer and user choices and logging winner & loser to console **
 * Day 5: Add your assets to the project and populate those to the web page
 * Day 6: Make your game functional. It should reset after each fight cleanly
 * Day 7: Finish your work or go the extra mile.
 */

  const paper = 1;
  const rock = 2;
  const scissors = 3;
  const player1Choice = rock;
  const player2Choice = paper;

  // function computerPick(){
  //   const randNum = Math.floor(Math.random()* 3 )+1;

  //   switch(randNum) {
  //     case 1:
  //     computerPick= rock;
  //     break;
  //     case 1:
  //     computerPick= paper;
  //     break;
  //     case 1:
  //     computerPick= scissors;
  //     break;
  //   }
  // }
  
  // function playerPick() {
  //   document.addEventListener(onclick)
    
  // }

//create function that sets button state to 0, onclick passes value of const



// userInput = userInput.toLowerCase();
//   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
//     return  userInput;
//   }
//   else {
//     console.log('error')
//   }

function gameLogic() {
  switch (((player1Choice % 3) - (player2Choice % 3) + 3) % 3) {
    
    case (1):
      console.log("player lost");
      break;
    case (2):
      console.log("player won");
      break;
    case (0):
      console.log("Great minds work alike, re-run it!");
      break;
    default:
      console.log("Opps!");
  };
};

function App() {
  //gameLogic();
    const[playerChoice, setPlayerChoice] = useState(null)
    console.log(playerChoice)
  return (
    <div className="App">
      <Result />
      <ChoiceDisplay />
      <WeaponChoiceDisplay 
      paper={paper} 
      rock = {rock} 
      scissors = {scissors}
      setPlayerChoice= {(num)=>setPlayerChoice(num)}
      playerChoice = {playerChoice}/>
      <FightButton />
    </div>
  );
};

export default App;
