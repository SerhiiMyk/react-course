export default function Car({car}) {
  return (
    <div>
      <div className={'car'}>
        <strong>id: </strong>{car.id}, <strong>model:</strong>{car.model}, <strong>year: </strong>{car.year}, <strong>price: </strong>{car.price}
      </div>

    </div>
  );
}