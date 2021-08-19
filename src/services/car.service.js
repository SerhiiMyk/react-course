let url = 'http://195.72.146.25/api/v1/cars'

const saveCar = (x) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(x),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const getCars = () => {
    return fetch(url)
        .then((response) => response.json())
}

const delCar = (id) => {
    return fetch(url + '/' + id, {
        method: 'DELETE'
    })
}

const putCar = (carId,car) => {
    return fetch(url + '/' + carId.id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export {saveCar, getCars, delCar, putCar}