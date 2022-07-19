

const WeaponChoiceDisplay = (props) => {
    
    /* Pass a choice function to record user choice to parent component
    * 1. Each button should have the same function but a different param **
    * to express what value it is **
    * 2. When selected, it should highlight the selected button by user 
    * 3. Reset selected button once it concludes the results
    * 4. Bonus: animate button if the user won the match
    */
   console.log(props.playerChoice)
    return <>
        <section>
            <button className={`button border p-2 mx-2 hover:bg-harlequin-500 ${true?"hey":"Yo"}`}onClick={()=>props.setPlayerChoice(props.rock)}>Rock</button>
            <button className="button border p-2 mx-2 hover:bg-harlequin-500"  onClick={()=>props.setPlayerChoice(props.paper)}>Paper</button>
            <button className="button border p-2 mx-2 hover:bg-harlequin-500"  onClick={()=>props.setPlayerChoice(props.scissors)}>Scissors</button>
        </section>
    </>
}

export default WeaponChoiceDisplay;