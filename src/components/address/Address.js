import Geo from "../geo/Geo";

export default function Address({address: {city, street,suite, zipcode,geo}}) {

    return (
        <div>
            address: <br/>
            city - {city}, street - {street} <br/>
            suite - {suite}, zipcode - {zipcode}
            <hr/>
            <Geo geo={geo}/>
        </div>
    );
}