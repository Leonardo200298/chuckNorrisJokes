const URLAPI = 'https://api.chucknorris.io/jokes/random';

const fetchApi = async ()=>{
    const jokes = await fetch(URLAPI);
    const { value } = await jokes.json();
    return value;
}
fetchApi();

export {
    fetchApi
};