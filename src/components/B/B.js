import {MyContext} from '../../App'
export default function B() {
    return (
        <div>

            <MyContext.Consumer>           {/*// Споживає отримане від Provider значення*/}
                {
                    (val) => {
                        return <h2>{val}</h2>
                    }
                }
            </MyContext.Consumer>

        </div>
    );
}