const URLNossosRestaurantes = 'https://3m21d2d5.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22nossosrestaurantes%22%5D%7B%0A++bairro%2C%0A++endereco%2C%0A++%22imageUrl%22%3A+Imagem.asset-%3Eurl%0A%7D';

window.addEventListener('load', async () => {
    try {
        const resposta = await fetch(URLNossosRestaurantes, {
            method: 'GET'
        });
        
        const dados = await resposta.json();
        
        const divPrincipal = window.document.querySelector('.carousel-inner-rest');
        
        dados.result.forEach(element => {
            const divConteudo = window.document.createElement('div');
            const divItems = window.document.createElement('div');
            const img = window.document.createElement('img');
            const h5 = window.document.createElement('h5');
            const p = window.document.createElement('p');
            
            divConteudo.classList.add('cardrest');
            divItems.classList.add('cardrest-body');
            
            img.alt = 'Card image';
            img.src = element.imageUrl;
            
            h5.classList.add('cardrest-title');
            h5.textContent = element.bairro;
            
            p.classList.add('cardrest-text');
            p.textContent = element.endereco;
            
            divItems.appendChild(h5);
            divItems.appendChild(p);
            
            divConteudo.appendChild(img);
            divConteudo.appendChild(divItems);
            
            divPrincipal.appendChild(divConteudo);
        });
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
    }
});

/*
const URLNossosRestaurantes = 'https://3m21d2d5.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22nossosrestaurantes%22%5D%7B%0A++bairro%2C%0A++endereco%2C%0A++%22imageUrl%22%3A+Imagem.asset-%3Eurl%0A%7D';

window.addEventListener('load', async () => {
    try {
        const resposta = await fetch(URLNossosRestaurantes, {
            method: 'GET'
        });
        
        const dados = await resposta.json();
        console.log(dados);
        
        const divPrincipal = window.document.querySelector('.carousel-inner-rest');
        
        dados.result.forEach(element => {
            const divConteudo = window.document.createElement('div');
            const divItems = window.document.createElement('div');
            const img = window.document.createElement('img');
            const h5 = window.document.createElement('h5');
            const p = window.document.createElement('p');
            
            divConteudo.classList.add('cardrest');
            divItems.classList.add('cardrest-body');
            
            img.alt = 'Card image';
            img.src = element.imageUrl;
            
            h5.classList.add('cardrest-title');
            h5.textContent = element.bairro;
            
            p.classList.add('cardrest-text');
            p.textContent = element.endereco;
            
            divItems.appendChild(h5);
            divItems.appendChild(p);
            
            divConteudo.appendChild(img);
            divConteudo.appendChild(divItems);
            
            divPrincipal.appendChild(divConteudo);
        });
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
    }
}); */