import './Simpson.css'

export default function Simpson({value}) {
    let classNameTitle = 'simpson'
    let classNameSubDiv = 'subDiv'
    let classNameImgDiv = 'imgDiv'
    return (
        <div className='simpson'>
            <div className='subDiv'>
                <h2>{value[0].name} - {value[0].surname} - {value[0].age}</h2>
                <p>{value[0].info}</p>
                <div className='imgDiv'>
                    <img src={value[0].photo} alt=""/>
                </div>
            </div>
            <div className='subDiv'>
                <h2>{value[1].name} - {value[1].surname} - {value[1].age}</h2>
                <p>{value[1].info}</p>
                <div className='imgDiv'>
                    <img src={value[1].photo} alt=""/>
                </div>
            </div>
            <div className='subDiv'>
                <h2>{value[2].name} - {value[2].surname} - {value[2].age}</h2>
                <p>{value[2].info}</p>
                <div className='imgDiv'>
                    <img src={value[2].photo} alt=""/>
                </div>
            </div>
            <div className='subDiv'>
                <h2>{value[3].name} - {value[3].surname} - {value[3].age}</h2>
                <p>{value[3].info}</p>
                <div className='imgDiv'>
                    <img src={value[3].photo} alt=""/>
                </div>
            </div>
            <div className='subDiv'>
                <h2>{value[4].name} - {value[4].surname} - {value[4].age}</h2>
                <p>{value[4].info}</p>
                <div className='imgDiv'>
                    <img src={value[4].photo} alt=""/>
                </div>
            </div>
        </div>
    );
}
