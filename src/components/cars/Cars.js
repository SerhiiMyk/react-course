import {useEffect, useState} from "react";
import Car from "../car/Car";
import {delCar, getCars} from "../../services/car.service";

export default function Cars({editCar}) {
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, [cars]);

    const deleteCar = (dc) => {
        delCar(dc);
       setCars( cars.filter(value => value.id !== dc))
    }

    return (
        <div>
            {
                cars.map(value =>
                    <Car
                        key={value.id}
                        car={value}
                        editCar={editCar}
                        deleteCar={deleteCar}
                    />)
            }

        </div>
    );
}