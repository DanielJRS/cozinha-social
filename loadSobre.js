const URLSobre = 'https://3m21d2d5.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22sobre%22%5D%7B%0A++sobre%0A%7D';

window.addEventListener('load', async () => {
    try {
        const resposta = await fetch(URLSobre, {
            method: 'GET'
        });
        const dados = await resposta.json();
        // console.log(dados.result[0].sobre);

        const divPai = document.querySelector('.txt-box-text-area');
        
        const div = document.createElement('div');
        div.classList.add('txt-box-text');
        div.id = 'sobre-nos'

        const span = document.createElement('span');
        span.innerHTML = dados.result[0].sobre;

        div.appendChild(span);
        divPai.appendChild(div);

    } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
    }
});