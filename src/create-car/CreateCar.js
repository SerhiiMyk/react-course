import {useState} from "react";
import {saveCar} from "../services/fetch.service";

export default function CreateCar() {
  let [car,setCar] = useState({model: '', price: '', year: ''})

  const onSubmit=(e)=>{
    e.preventDefault()
    console.log(car);
    saveCar(car)
  }
  const onChangeFunk=(e)=>{
    setCar({...car,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name={'model'} value={car.model} onChange={onChangeFunk}/>
        <input type="number" name={'price'} value={car.price} onChange={onChangeFunk}/>
        <input type="number" name={'year'} value={car.year} onChange={onChangeFunk}/>
        <button>save</button>
      </form>
    </div>
  )}