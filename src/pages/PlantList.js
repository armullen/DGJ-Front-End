import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function PlantList () {
    const [plants, setPlants] = useState([]);
    const [plantsForm, setPlantsForm] = useState({
        type: "",
        variety: "",
        scientificName: "",
        growTime: "",
        sunRequirements: "",
        commonPests: "",
        bestCompanionPlants: "",
    })

    async function getPlants() {
        try {
            let myPlants = await fetch('http://localhost:3002/plantlist')
            myPlants = await myPlants.json();
            setPlants(myPlants);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getPlants();
    }, []);

    console.log(plants);

    function loaded(arr) {
        return(
            <>
                {arr.map((plants, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/plantlist/${plants._id}`}>
                            <h3>Type: {plants.type}</h3>
                            </Link>
                            <h3>Variety: {plants.variety}</h3>
                            <h3>Scientific Name: {plants.scientificName}</h3>
                            <h3>Grow Time: {plants.growTime}</h3>
                            <h3>Sun Requirements: {plants.sunRequirements}</h3>
                            <h3>Common Pests: {plants.commonPests}</h3>
                            <h3>Best Companion Plants: {plants.bestCompanionPlants}</h3>
                            <hr />
                        </div>
                    )
                })}
            </>
        )
    }

    function handleChange(e) {
        console.log(e.target);
        setPlantsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            await fetch('http://localhost:3002/plantlist', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(plantsForm)
            })
            getPlants();
            e.target.reset();
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Type:</label>
                <input type="text" name="type" onChange={handleChange} placeholder="Type of plant?"></input>
                <label>Variety:</label>
                <input type="text" name="variety" onChange={handleChange} placeholder="Variety of the type?"></input>
                <label>Scientific Name:</label>
                <input type="text" name="scientificName" onChange={handleChange} placeholder="Plant's scientific name?"></input>
                <label>Grow Time:</label>
                <input type="number" name="growTime" onChange={handleChange} placeholder="What is the normal grow time length?"></input>
                <label>Sun Requirements:</label>
                <input type="text" name="sunRequirements" onChange={handleChange} placeholder="How much sun does it need?"></input>
                <label>Common Pests:</label>
                <input type="text" name="commonPests" onChange={handleChange} placeholder="What common pests does it have?"></input>
                <label>Best Companion Plants:</label>
                <input type="text" name="companionPlants" onChange={handleChange} placeholder="What are the best companion plants?"></input>
                <button>Add Your Plant</button>
            </form>
            {plants.length ? loaded(plants) : <h2>Loading...</h2>}
        </>
    )
}

export default PlantList;