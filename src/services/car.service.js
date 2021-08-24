export const saveCar= ({model,price,year}) => {
    return fetch('http://91.201.233.14/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify({model,price,year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
