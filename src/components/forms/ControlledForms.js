import {useState} from "react";
import {putCar, saveCar} from "../../services/car.service";
import Cars from "../cars/Cars";

export default function ControlledForms() {

    let [car, setCar] = useState({model: '', price: '', year: ''})
    let [carId, setCarId] = useState({})

    function onChangeFunk(e) {
        setCar({...car, [e.target.name]: e.target.value});
    }
    function saveC(e) {
        saveCar(car);
    }
    const editCar = (ec) => {
        setCarId({...ec});
        setCar({...ec})
    }
    function editC(e) {
        // e.preventDefault()
        putCar(carId, car);
        // console.log(carId,car);
    }
    return (
        <div>
            <form>
                <input type="text" name={'model'} value={car.model} onInput={onChangeFunk}/>
                <input type="number" name={'price'} value={car.price} onInput={onChangeFunk}/>
                <input type="number" name={'year'} value={car.year} onInput={onChangeFunk}/>
                <input type="submit" value={'save'} onClick={saveC}/>
                <input type="submit" value={'changed'} onClick={editC}/>
            </form>

            <Cars
                editCar={editCar}
            />
        </div>
    );
}