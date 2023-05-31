import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function JournalEntryShow () {
    const [journalEntry, setJournalEntry] = useState(null);
    const { entryId } = useParams();


    async function getJournalEntry() {
        try {
            let myJournalEntry = await fetch (`http://localhost:3002/journal/${entryId}`);
            myJournalEntry = await myJournalEntry.json();
            setJournalEntry(myJournalEntry);
        } catch(err) {
            console.log(err);
        }
    }

    function entryLoaded() {
        return(
            <>
                <h3>Month: {journalEntry.month}</h3>
                <h3>Year: {journalEntry.year}</h3>
                <h3>Notes: {journalEntry.notes}</h3>
                < Link to ={`/journal/${entryId}/edit`}>
                    <button>Edit</button>
                </Link>
                < Link to ={`/journal/${entryId}/delete`}>
                    <button>Delete</button>
                </Link>
            </>
        )
    }

    useEffect(() => {
        getJournalEntry();
    }, []);

    return(
        <>
            {journalEntry ? entryLoaded() : <h2>Loading...</h2>}
        </>
    )
}

export default JournalEntryShow;