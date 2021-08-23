import './Car.css'
export default function Car({car, editCar, deleteCar}) {

    return (
        <div className={'carWrap'}>
            <div className={'car'}>
                <strong>id: </strong>{car.id}, <strong>model:</strong>{car.model}, <strong>year: </strong>{car.year}, <strong>price: </strong>{car.price}
            </div>
            <div className={'carButton'}>
                <button onClick={() => editCar(car)}>edit</button>
                <button onClick={() => deleteCar(car.id)}>delete</button>
            </div>
        </div>
    );
}