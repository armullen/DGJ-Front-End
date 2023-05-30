import { useParams } from "react-router";
import { Link } from "react-router-dom";

function PlantDelete() {
    const {plantId} = useParams();

    async function deleteMyPlant() {
        try {
            await fetch(`http://localhost:3002/plantlist/${plantId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <>
            <h2>Are you sure you want to delete this plant?</h2>
            <Link to='/plantlist'>
                <button onClick={deleteMyPlant}>Yes, delete this plant.</button>
            </Link>
            <Link to={`/plantlist/${plantId}`}>
                <button>No, cancel.</button>
            </Link>

        </>
    )
}

export default PlantDelete;