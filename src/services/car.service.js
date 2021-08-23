let url = 'http://91.201.233.14/api/v1/cars'

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
const putCar = (choseCar, car) => {
    return fetch(url + '/' + choseCar.id, {
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