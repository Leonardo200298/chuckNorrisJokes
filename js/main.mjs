import { fetchApi } from './api.mjs';

const mostrarChiste = async function(){
    try {
        const res  = await fetchApi();
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
}
mostrarChiste ();