// import { gameLogic } from "../App";

const FightButton = ({emoji = null, playerChoice = null, runFight= null}) => {
     
    /* This component should take in a function to start the fight = playerChoice
    * 1. it should be styled appropriately.
    * 2. Once fight finishes, it should display an emoji for a duration
    * 3. Bonus: add loading animations and cleanups in the parent component
    */
    return (
        <>
            <button
                disabled = {playerChoice === null}
                className={`button border px-4 text-red-500 mt-4 hover:bg-fight-500 focus:bg-harlequin-500 focus:ring focus:ring-red-500 disabled:bg-gray-600`} 
                 onClick = {() => (runFight())}
            >   
                &#128074;FIGHT!&#128074; 
                {emoji}
            </button>
        </>
    )
}

export default FightButton;