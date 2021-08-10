import Geo from "../geo/Geo";

export default function Adress({userId}) {
    return (
        <div>
            <h4>street - {userId.address.street}</h4>
            <h4>suite - {userId.address.suite}</h4>
            <h4>city - {userId.address.city}</h4>
            <h4>zipcode - {userId.address.zipcode}</h4>
            <hr/>
            <Geo userId={userId}/>
        </div>
    );
}