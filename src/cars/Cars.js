import {useEffect, useState} from "react";
import {getCars} from "../services/fetch.service";
import Car from "./car/Car";

export default function Cars() {
    let [cars, serCars] = useState([])

    useEffect(() => {
        getCars().then(value => serCars([...value]))
    }, [])

    return (
        <div>

            {
                cars.map(value => <Car
                    car={value}
                    key={value.id}/>)
            }

        </div>
    );
}