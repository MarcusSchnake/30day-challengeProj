
const Result = ({who = 'no one yet', weapon = 'no weapon yet'}) => {
    /* This component should take in a who and weapon prop
    * 1. It should only display data
    * 2. Bonus: Change color based on weapon choice with a map
    */

    return (
        <section>
            <h4>
                And the winner is {who} using {weapon}
            </h4>
        </section>
    )
};


export default Result;