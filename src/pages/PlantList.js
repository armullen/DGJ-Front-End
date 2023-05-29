import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function PlantList () {
    const [plants, setPlants] = useState([]);
    // const [plantsForm, setPlantsForm] = useState({
    //     type: "",
    //     variety: "",
    // })

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
                            <Link to={`/plants/${plants._id}`}>
                            </Link>
                            <h3>Type: {plants.type}</h3>
                            <h3>Variety: {plants.variety}</h3>
                            <hr />
                        </div>
                    )
                })}
            </>
        )
    }
    return(
        <>
            {plants.length ? loaded(plants) : <h2>Loading...</h2>}
        </>
    )
}

export default PlantList;