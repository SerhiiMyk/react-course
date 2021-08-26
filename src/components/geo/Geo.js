export default function Geo({geo}) {
    return (
        <>
            {geo &&
            <div>
                <strong>geo:</strong> <br/>
                latitude: {geo.lat}, longtitude: {geo.lng}
            </div>}
        </>
    );
}