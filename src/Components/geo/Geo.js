export default function Geo({userId}) {
  return (

    <div>
        <h4>lat - {userId.address.geo.lat}</h4>
        <h4>lng - {userId.address.geo.lng}</h4>
    </div>
  );
}