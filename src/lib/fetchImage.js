export function randomDog() {

    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            return data.message;
        });

}

export function randomCat() {

    return fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => data[0].url)
        .catch(error => console.error(error));

}