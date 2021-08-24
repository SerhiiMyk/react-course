import {useEffect, useState} from "react";
import {getCars} from "../../services/fetch.service";
import Car from "../car/Car";
import './Cars.css'

export default function Cars() {
    let [cars, serCars] = useState([])

    useEffect(() => {
        getCars().then(value => serCars([...value]))
    }, [])

    return (
        <div className={'CarsWrap'}>
            <h2>Cars:</h2>
            {
                cars.map(value => <Car
                    car={value}
                    key={value.id}/>)
            }

        </div>
    );
}