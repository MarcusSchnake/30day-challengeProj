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
  const weps = {
    1: "paper",
    2: "rock", 
    3: "scissors", 
  }
  
  // const selectionName = [
  //   {name:"paper",value:1},
  //   {name:"rock",value:2},
  //   {name:"scissors", value:3},
  // ];
  
  // const mapName = new Map()
  // mapName.set(
  //   "paper", {
  //     value:1
  //   });
  // mapName.set(
  //   "rock", {
  //     value:2
  //   });
  //   mapName.set(
  //     "scissors", {
  //       value:3
  //   });
  


function computerPick(){
    return Math.floor(Math.random()* 3 )+1;

  };
  console.log(computerPick())

export function gameLogic(player1Choice,computerPick) {
  let winnerWinner = ""
 
  switch (((player1Choice % 3) - (computerPick % 3) + 3) % 3) { 
    
    case (1):
      winnerWinner = "computer wins";
      break;
    case (2):
      winnerWinner= "player wins";
      break;
    case (0):
      winnerWinner= "No One Draw";
      break;
    default:
      winnerWinner= "Opps!";
  };
  
  return winnerWinner;
  
};
 

function App() {
  const[playerChoice, setPlayerChoice] = useState(null)
  const[winner, setWinner] = useState("")
  const[weapon, setWeapon] = useState("")
  const runFight = () => {
  setWinner(gameLogic(playerChoice, computerPick()));
  setWeapon(weps[playerChoice]);
  }
  return (
    <div className="App">
      <Result
      who = {winner}
      weapon = {weapon}
      />
      <ChoiceDisplay
      playerChoice = {playerChoice} 
      />
      <WeaponChoiceDisplay 
      paper={paper} 
      rock = {rock} 
      scissors = {scissors}
      setPlayerChoice= {(num)=>setPlayerChoice(num)}
      playerChoice = {playerChoice}/>
      <FightButton
      playerChoice = {playerChoice}
      runFight = {runFight}
      />
    </div>
  );
};

export default App;


