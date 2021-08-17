import {useState} from "react";
import {saveCar} from "../../services/car.service";

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
                <input type="model" model={'model'} value={model} onInput={onInputChangeModel}/>
                <input type="price" price={'price'} value={price} onInput={onInputChangePrice}/>
                <input type="year" year={'year'} value={year} onInput={onInputChangeYear}/>
                <input type="submit"/>
            </form>
            <div>{JSON.stringify(car)}</div>
            <div>getCars</div>

        </div>
    );
}