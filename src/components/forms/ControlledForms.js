import {useState} from "react";
import {getCars, saveCar} from "../../services/car.service";

export default function ControlledForms() {

    let [model, setModel] = useState('model')
    let [price, setPrice] = useState('price')
    let [year, setYear] = useState('year')
    let [car, setCar] = useState({model: '', price: '', year: ''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        let tempCar = {model, price, year}
        setCar({...tempCar});
        saveCar(tempCar)
    }

    let onInputChangeModel = (event) => {
        setModel(event.target.value)
    }
    let onInputChangePrice = (event) => {
        setPrice(event.target.value)
    }
    let onInputChangeYear = (event) => {
        setYear(event.target.value)
    }
    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" model={'model'} value={model} onInput={onInputChangeModel}/>
                <input type="number" price={'price'} value={price} onInput={onInputChangePrice}/>
                <input type="number" year={'year'} value={year} onInput={onInputChangeYear}/>
                <input type="submit" value={'save'}/>
            </form>
            <div>{JSON.stringify(car)}</div>
            <div> {getCars}</div>

        </div>
    );
}