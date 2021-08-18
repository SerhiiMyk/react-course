import {useEffect, useState} from "react";
import Car from "../car/Car";
import {getCars} from "../../services/car.service";

export default function Cars() {
    let [cars, setCars] = useState([])


    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, []);

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