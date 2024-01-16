const URLAPI = 'https://api.chucknorris.io/jokes/random';

const fetchApi = async ()=>{
    try {
        const jokes = await fetch(URLAPI);
        const {value} = await jokes.json();
        return value;
    }catch (error) {
        console.log(error);
        
    } 
}

document.querySelector('#btn-joke').addEventListener('click',async ()=>{
    document.querySelector('#joke-space').innerHTML = await fetchApi();
})

export {
    fetchApi
};