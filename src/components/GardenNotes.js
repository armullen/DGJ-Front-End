import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function GardenNotes () {
        // <div className="journalForm">
        //     <form>
        //         <label>Date:</label>
        //         <input type='date' name='date'  placeholder="Date"/>
        //         <label>Note:</label>
        //         <input type='text' name='note'  placeholder="Your garden note goes here"/>
        //         <button>Submit</button>
        //     </form>
        // </div>
       // <h2>Past Notes:</h2>
        const [journalEntries, setJournalEntries] = useState([]);
    async function getGardenNotes() {
        try {
            let myJournalEntries = await fetch('http://localhost:3002/journal')
            myJournalEntries = await myJournalEntries.json();
            setJournalEntries(journalEntries);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getGardenNotes();
    }, []);

    console.log(journalEntries);

    function loaded(arr) {
        return(
            <>
                {arr.map((journalEntries, idx) => {
                    return (
                        <div key={idx}>
                            <Link to={`/journalEntries/${journalEntries._id}`}>
                            </Link>
                            <h3>Date: {journalEntries.date}</h3>
                            <h3>Note:{journalEntries.notes}</h3>
                            <hr />
                        </div>
                    )
                })}
            </>
        )
    }
    return(
        <>
        {journalEntries.length ? loaded(journalEntries) : <h2>Loading...</h2>}
        </>
    )
    
}

export default GardenNotes;