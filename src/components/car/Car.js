export default function Car({car: {model, price, year}}) {
    const onClickCarEdit = () => {
        editCar()
    }
    const onClickCarDelete = () => {
        deleteCar()
    }
  return (
    <div>
        <h4><strong>model: </strong>{model}, <strong>year: </strong>{year}, <strong>price: </strong>{price} </h4>
        <button onClick={onClickCarEdit}>edit</button>
        <button onClick={onClickCarDelete}>delete</button>
        <hr/>
    </div>
  );
}