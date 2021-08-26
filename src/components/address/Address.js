import Geo from "../geo/Geo";

export default function Address({address}) {
    return (
        <>
            {address && <div>
                <strong>address:</strong> <br/>
                city - {address.city}, street - {address.street} <br/>
                suite - {address.suite}, zipcode - {address.zipcode}
                <hr/>
                <Geo geo={address.geo}/>
            </div>}
        </>
    );
}