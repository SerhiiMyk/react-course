export default function Car({car, editCar, deleteCar}) {

    return (
        <div>
            <p>
                <strong>id: </strong>{car.id} <strong>model: </strong> {car.model}, <strong>year: </strong>{car.year}, <strong>price: </strong>{car.price}
            </p>
            <button onClick={() => editCar(car)}>edit</button>
            <button onClick={() => deleteCar(car.id)}>delete</button>
            <hr/>
        </div>
    );
}