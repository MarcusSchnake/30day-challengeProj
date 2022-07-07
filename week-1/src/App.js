import './App.css';

import ChoiceDisplay from './components/ChoiceDisplay';
import FightButton from './components/FightButton';
import Result from './components/Result';
import WeaponChoiceDisplay from './components/WeaponChoiceDisplay';

/* Your objective is to create a rock, paper, and scissors game,
* or your weapons of choice. No matter what the rules are
* Rock -> Scissors, Paper -> Rock, Scissors-> Paper.
* Use the App component to house all logic and traverse data through
* props to children components. Each section will bring you closer
* to finishing the game. Happy and Clean Coding!
* Day 1: Determine & create your data structures and pass example props to your components
* Day 2: Make user choice display functional and logging to console
* Day 3: Make the computer determine a weapon and logging to the console
* Day 4: Make determineWinner between computer and user choices and logging winner & loser to console
* Day 5: Add your assets to the project and populate those to the web page
* Day 6: Make your game functional. It should reset after each fight cleanly
* Day 7: Finish your work or go the extra mile.
*/


function App() {
  return (
    <div className="App">
      <Result />
      <ChoiceDisplay />      
      <WeaponChoiceDisplay />
      <FightButton />
    </div>
  );
}

export default App;
