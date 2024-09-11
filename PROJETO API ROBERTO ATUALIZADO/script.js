import { buscarFilme, generoFilme } from "./sistema.js";

const pesquisaFilme = document.getElementById('pesquisaFilme');

pesquisaFilme.addEventListener('click', async (e) => {
    e.preventDefault();

    const input = document.getElementById('filme').value; // Pega o valor do input
    const result = document.getElementById('resultadoFilme'); 
    const divPagina = document.getElementById('paginaDiv');





    //verifica se exite espaços vazios antes ou depois, caso tenha executa uma funçao
    if (input.trim() === '') {
        result.textContent = 'Digite um nome de filme para ver o resultado';
        divPagina.innerHTML = 'Nehnhum filme encontrado'; // Limpa o conteúdo se a entrada estiver vazia
    } else {
        result.textContent = `Você está procurando o filme: ${input}`;

        const filmes = await buscarFilme(input);
        const generosOBJ = await generoFilme();

        //verifica se existe algum filme e se o tamanho do vetor de filmes é maior que 0
        if (filmes && filmes.length > 0) {

            // exibe aos 6 primeiros filmes
            const primeirosFilmes = filmes.slice(0, 6);
            let ps = '';


            //executa determinada funçao para cada elemento do vetor
            primeirosFilmes.forEach(filme => {

                const posterPath = filme.poster_path ? `https://image.tmdb.org/t/p/w300${filme.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image';

                console.log(generosOBJ);
                console.log(filme.genre_ids);

                //cria uma const para filtrar do obj os ids que foram passados
                const generosFilmes = generosOBJ.genres.filter(
                    ( genero ) => filme.genre_ids.includes(genero.id)
                )
                //cria um vetor apenas com os nomes dos ids relacionados
                const generosNomes = generosFilmes.map(g => g.name);
                console.log(generosNomes);

                console.log(generosFilmes);


                ps += `
                    <div id="filmesEncontrados">
                        <img src="${posterPath}" alt="${filme.title} Poster" />
                        <p>Título: ${filme.title}</p>
                        <p>Genero: ${generosNomes}</p>
                        <p>Linguagem: ${filme.original_language}</p>
                        <p>Data de lançamento: ${filme.release_date}</p>
                        <p>Sinopse</p>
                        <p>${filme.overview}</p>
                        <hr>
                    </div>
                `;
            });
            divPagina.innerHTML = ps;
        } else {
            divPagina.innerHTML = 'Nenhum filme encontrado.';
        }
        console.log(filmes);


    }


});






