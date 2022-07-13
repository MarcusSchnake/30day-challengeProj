const WeaponChoiceDisplay = () => {
    /* Pass a choice function to record user choice to parent component
    * 1. Each button should have the same function but a different param
    * to express what value it is
    * 2. When selected, it should highlight the selected button by user
    * 3. Reset selected button once it concludes the results
    * 4. Bonus: animate button if the user won the match
    */
    return <>
        <section>
            <button className="button border p-2 mx-2">Rock</button>
            <button className="button border p-2 mx-2">Paper</button>
            <button className="button border p-2 mx-2">Scissors</button>
        </section>
    </>
}

export default WeaponChoiceDisplay;