const BASE_URL = 'http://localhost:5000';
 
const getPersons = () => {
    return fetch(`${BASE_URL}/persons`) 
        .then(res => res.json());
};

const createPerson= (personData)=> {
    return fetch(`${BASE_URL}/persons`,{

        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(personData)
    })
    .then(res=> res.json())
}
const getApiError = (response) => {
    return response.error
}
export { getPersons,
        createPerson,
        getApiError };
