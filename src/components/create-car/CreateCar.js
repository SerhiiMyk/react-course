import {useState} from "react";
import {saveCar} from "../../services/fetch.service";
import './CreateCar.css'
export default function CreateCar() {
    let [car, setCar] = useState({model: '', price: '', year: ''})

    const onSubmit = (e) => {
        saveCar(car)
    }
    const onChangeFunk = (e) => {
        setCar({...car, [e.target.name]: e.target.value})
    }
    return (
        <div >
            <form onSubmit={onSubmit} className={'wrap'}>
                <div className={'fieldNames'}>
                    <h4>model:</h4>
                    <h4>price:</h4>
                    <h4>year:</h4>
                </div>
                <div className={'forms'}>
                    <input type="text" name={'model'} value={car.model} onChange={onChangeFunk}/>
                    <input type="number" name={'price'} value={car.price} onChange={onChangeFunk}/>
                    <input type="number" name={'year'} value={car.year} onChange={onChangeFunk}/>
                </div>
                <div className={'buttons'}>
                    <button>save</button>
                </div>
            </form>

        </div>
    )
}