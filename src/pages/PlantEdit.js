import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function PlantEdit() {
    const { plantId } = useParams();
    const [plant, setPlant] = useState(null);
    const navigate = useNavigate();

    async function getPlant() {
        try {
            let myPlant = await fetch(`http://localhost:3002/plantlist/${plantId}`);
            myPlant = await myPlant.json();
            setPlant(myPlant);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getPlant();
    }, []);

    function handleChange(e) {
        setPlant((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        try{
            e.preventDefault();
            await fetch(`http://localhost:3002/plantlist/${plantId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(plant)
            });
            return navigate(`/plantlist/${plantId}`);
        } catch (err) {
            console.log(err);
        }
    }

    function loaded() {
        return(
            <>
                <h2>Editing {plant.variety} {plant.type}: </h2>
                <form onSubmit={handleSubmit}>
                  Type: <input type="text" value={plant.type} name="type" onChange={handleChange} />  
                  Variety: <input type="text" value={plant.variety} name="variety" onChange={handleChange} />  
                  Scientific Name: <input type="text" value={plant.scientificName} name="scientificName" onChange={handleChange} />  
                  Grow Time: <input type="text" value={plant.growTime} name="growTime" onChange={handleChange} />  
                  Sun Requirements: <input type="text" value={plant.sunRequirements} name="sunRequirements" onChange={handleChange} />  
                  Common Pests: <input type="text" value={plant.commonPests} name="commonPests" onChange={handleChange} />  
                  Best Companion Plants: <input type="text" value={plant.bestCompanionPlants} name="bestCompanionPlants" onChange={handleChange} />  
                  <button>Submit</button>
                </form>
            </>
        )
    }

    return (
        <>
            {plant ? loaded() : <h2>Loading...</h2>}
        </>
    )
}

export default PlantEdit;