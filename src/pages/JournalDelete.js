import { useParams } from "react-router";
import { Link } from "react-router-dom";

function JournalDelete() {
    const {entryId} = useParams();

    async function deleteMyJournalEntry() {
        try {
            await fetch(`http://localhost:3002/journal/${entryId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <h2>Are you sure you want to delete this journal entry?</h2>
            <Link to='/journal'>
                <button onClick={deleteMyJournalEntry}>Yes, delete this entry.</button>
            </Link>
            <Link to={`/journal/${entryId}`}>
                <button>No, cancel.</button>
            </Link>
        </>
    )
}

export default JournalDelete;