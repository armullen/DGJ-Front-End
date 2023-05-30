import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function GardenNotes () {
    const [journalEntries, setJournalEntries] = useState([]);
    const [journalForm, setJournalForm] = useState({
        month: "",
        year: "",
        Note: "",
    })
    async function getGardenNotes() {
        try {
            let myJournalEntries = await fetch('http://localhost:3002/journal')
            myJournalEntries = await myJournalEntries.json();
            setJournalEntries(myJournalEntries);
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
                            <h3>Month: {journalEntries.month}</h3>
                            <h3>Year: {journalEntries.year}</h3>
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
            <div className="journalForm">
                 <form>
                     <label>Month:</label>
                     <input type='text' name='month'  placeholder="Month"/>
                     <label>Year:</label>
                     <input type='number' name='year'  placeholder="year"/>
                     <label>Note:</label>
                     <input type='text' name='note'  placeholder="Your garden note goes here"/>
                     <button>Submit</button>
                 </form>
             </div>
        </>
    )
    
}

export default GardenNotes;