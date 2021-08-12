export default function Geo({location: {lat, lng}}) {
    return (
        <div>
            <p>
                <strong>geo:</strong> <br/>
                latitude: {lat}, longtitude: {lng}
            </p>
        </div>
    );
}