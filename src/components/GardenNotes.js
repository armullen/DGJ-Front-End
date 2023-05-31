import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function GardenNotes () {
    const [journalEntries, setJournalEntries] = useState([]);
    const [journalForm, setJournalForm] = useState({
        month: "January",
        year: "",
        notes: "",
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
                            <h3>{journalEntries.month}</h3>
                            <h3>{journalEntries.year}</h3>
                            <h3>{journalEntries.notes}</h3>
                            <hr />
                        </div>
                    )
                })}
            </>
        )
    }

    function handleChange(e) {
        console.log(e.target);
        setJournalForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            console.log(journalForm)
            await fetch('http://localhost:3002/journal', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(journalForm)
            })
            getGardenNotes();
            e.target.reset();
        } catch (err) {
            console.log(err);
        }
    }

    return(
            <div className="journalForm">
                 <form onSubmit={handleSubmit}>
                    <label>Month:
                        <select id="month" onChange={handleChange}>
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                        </select>
                    </label>
                     <label>Year:</label>
                     <input type='number' name='year' onChange={handleChange} placeholder="year"/>
                     <label >Note:</label>
                     <input id="journalNote" type='text' name='notes' onChange={handleChange} placeholder="Your garden note goes here"/>
                     <button id="submitBtn">Submit</button>
                 </form>
                 {journalEntries.length ? loaded(journalEntries) : <h2>Loading...</h2>}
             </div>
    )
    
}

export default GardenNotes;