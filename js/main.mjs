import { fetchApi } from './api.mjs';

const mostrarChiste = async function(){
    try {
        const res  = await fetchApi();
        return res;
    } catch (error) {
        console.log(error);
    }
}
mostrarChiste ();