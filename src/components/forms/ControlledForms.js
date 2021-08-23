import './Forms.css'
import {useState} from "react";
import {putCar, saveCar} from "../../services/car.service";
import Cars from "../cars/Cars";

export default function ControlledForms() {

    let [car, setCar] = useState({model: '', price: '', year: ''})
    let [choseCar, setChoseCar] = useState({})

    function onChangeFunk(e) {
        setCar({...car, [e.target.name]: e.target.value});
    }

    function saveC(e) {
        saveCar(car);
    }

    const editCar = (ec) => {
        setChoseCar({...ec});
        setCar({...ec})
    }

    function editC(e) {
        putCar(choseCar, car);

    }

    return (
        <div>
            <form className={'wrap'}>
                <div className={'fieldNames'}>
                    <h4>model:</h4>
                    <h4>year:</h4>
                    <h4>price:</h4>
                </div>
                <div className={'forms'}>
                    <input type="text" name={'model'} value={car.model} onInput={onChangeFunk}/>
                    <input type="number" name={'year'} value={car.year} onInput={onChangeFunk}/>
                    <input type="number" name={'price'} value={car.price} onInput={onChangeFunk}/>
                </div>
                <div className={'buttons'}>
                    <input type="submit" value={'save'} onClick={saveC}/>
                    <input type="submit" value={'change'} onClick={editC}/>
                </div>
            </form>

            <Cars
                editCar={editCar}
            />
        </div>
    );
}