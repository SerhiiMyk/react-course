import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import Car from "../car/Car";

export default function Cars() {
    let [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    return (
        <div>
            {
                cars.map(value =>
                    <Car
                        key={value.id}
                        car={value}/>)
            }

        </div>
    );
}