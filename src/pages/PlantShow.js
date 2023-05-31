import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function PlantShow () {
    const[plant, setPlant] = useState(null);
    const { plantId } = useParams();
    
    async function getPlant() {
        try {
            let myPlant = await fetch (`http://localhost:3002/plantlist/${plantId}`);
            myPlant = await myPlant.json();
            setPlant(myPlant);
        } catch(err) {
            console.log(err);
        }
    }

    function plantLoaded() {
        return(
            <>
                <h3>Type: {plant.type}</h3>
                <h3>Variety: {plant.variety}</h3>
                <h3>Scientific Name: {plant.scientificName}</h3>
                <h3>Grow Time: {plant.growTime}</h3>
                <h3>Sun Requirements: {plant.sunRequirements}</h3>
                <h3>Common Pests: {plant.commonPests}</h3>
                <h3>Best Companion Plants: {plant.bestCompanionPlants}</h3>
                <Link to ={`/plantlist/${plantId}/edit`}>
                    <button>Edit</button>
                </Link>
                <Link to ={`/plantlist/${plantId}/delete`}>
                    <button>Delete</button>
                </Link>
            </>
        )
    }

    useEffect(() => {
        getPlant();
    }, []);

    return(
        <>
            {plant ? plantLoaded() : <h2>Loading...</h2>}
        </>
    )
}

export default PlantShow;