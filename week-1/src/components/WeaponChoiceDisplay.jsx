

const WeaponChoiceDisplay = (props) => {
    
    /* Pass a choice function to record user choice to parent component
    * 1. Each button should have the same function but a different param **
    * to express what value it is **
    * 2. When selected, it should highlight the selected button by user 
    * 3. Reset selected button once it concludes the results
    * 4. Bonus: animate button if the user won the match
    */
  
    return <>
        <section>
            <button 
                className={`button border p-2 mx-2 hover:bg-harlequin-500 focus:bg-harlequin-500 focus:ring focus:ring-red-500 ${props.playerChoice === props.rock?"bg-purple-500":null}`}
                onClick={()=>props.setPlayerChoice(props.rock)}
            >
                Rock&#9968;
            </button>
            <button 
                className={`button border p-2 mx-2 hover:bg-harlequin-500 focus:bg-harlequin-500 focus:ring focus:ring-red-500 ${props.playerChoice === props.paper?"bg-purple-500":null}`}  
                onClick={()=>props.setPlayerChoice(props.paper)}
            >   
                Paper&#127794;	

            </button>
            <button 
                className={`button border p-2 mx-2 hover:bg-harlequin-500 focus:bg-harlequin-500 focus:ring focus:ring-red-500  ${props.playerChoice === props.scissors?"bg-purple-500":null}`}  
                onClick={()=>props.setPlayerChoice(props.scissors)}
            >   
                Scissors&#9986;

                </button>
        </section>
    </>
}

export default WeaponChoiceDisplay;