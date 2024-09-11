export async function buscarFilme(dados) {

    let query = dados;
    let key = '09e17e44a32f1de8c7fc483225bdf374'
    let language = 'pt-BR'
    let urlAPI = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}&language=${language}`;
    
   
    try {
        const resposta = await fetch(`${urlAPI}`);

        const info = await resposta.json();

        if (resposta.status == 200) {

            return info.results
        }

    } catch (e) {
        alert('Servidor fora do ar!!!');
        return null;
    }


}


export async function generoFilme(){

    let generos = `https://api.themoviedb.org/3/genre/movie/list?&api_key=09e17e44a32f1de8c7fc483225bdf374&language=pt`

    try{
        const resposta = await fetch(`${generos}`)

        const generosJSON = await resposta.json()

        if(resposta.status == 200){

            return generosJSON
        }

    } catch (e) {
        alert('Servidor fora do ar!!!');
        return null;
    }





}












