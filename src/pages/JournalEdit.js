import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function JournalEdit() {
    const { entryId } = useParams();
    const [entry, setEntry] = useState(null);
    const navigate = useNavigate();

    async function getJournalEntry() {
        try {
            let myJournalEntry = await fetch (`http://localhost: 3002/journal/${entryId}`);
            myJournalEntry = await myJournalEntry.json();
            setEntry(myJournalEntry);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getJournalEntry();
    },[]);

    function handleChange(e) {
        setEntry((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        try{
            e.preventDefault();
            await fetch(`http://localhost:3002/journal/${entryId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            });
            return navigate(`/journal/${entryId}`);
        } catch (err) {
            console.log(err);
        }
    }

    function loaded() {
        return(
            <>
                <h2>Editing {entry.month} {entry.year}:</h2>
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
            </>
        )
    }

    return (
        <>
            {entry ? loaded() : <h2>Loading...</h2>}
        </>
    )
}

export default JournalEdit;