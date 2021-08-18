export default function Car({car}) {
  return (
    <div>
        <li>{car.model}</li>
        <li>{car.price}</li>
        <li>{car.year}</li>

    </div>
  );
}