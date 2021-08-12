import Geo from "../geo/Geo";

export default function Address({address: {city, street, suite, zipcode, geo}}) {
    return (
        <div>
            <p>
                <strong>address:</strong> <br/>
                city - {city}, street - {street} <br/>
                suite - {suite}, zipcode - {zipcode}
            </p>
            <hr/>
            <Geo location={geo}/>
        </div>
    );
}