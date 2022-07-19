const FightButton = ({emoji = null}) => {
    /* This component should take in a function to start the fight
    * 1. it should be styled appropriately.
    * 2. Once fight finishes, it should display an emoji for a duration
    * 3. Bonus: add loading animations and cleanups in the parent component
    */
    return (
        <>
            <button className="button border px-4 text-red-500 mt-4 hover:bg-fight-500">FIGHT! {emoji}</button>
        </>
    )
}

export default FightButton;