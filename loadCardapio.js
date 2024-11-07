const URLCardapio = 'https://3m21d2d5.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22cardapio%22%5D%7B%0A++++diaDaSemana%2C%0A++++++tittle%2C%0A++++itemsPrincipal%2C%0A++++itemsComplemento%0A%7D';

window.addEventListener('load', async () => {
    try {
        const resultado = await fetch(URLCardapio, {
            method: 'GET'
        });

        const dados = await resultado.json();
        console.log(dados);

        const ordemDias = {
            'Segunda-Feira': 1,
            'Terça-Feira': 2,
            'Quarta-Feira': 3,
            'Quinta-Feira': 4,
            'Sexta-Feira': 5,
            'Sábado': 6,
            'Domingo': 7
        };
        dados.result.sort((a, b) => {
            return ordemDias[a.diaDaSemana] - ordemDias[b.diaDaSemana];
        });

        const divLinhaCardapio = window.document.querySelector('.linha-cardapio');

        const linhas = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
        linhas.forEach(linha => linha.classList.add('linha-card-table'));

        dados.result.forEach((item, index) => {
            const divCardCardapio = window.document.createElement('div');
            const divDiaArea = window.document.createElement('div');
            const a = window.document.createElement('div');
            const divDescribCardapio = window.document.createElement('div');
            const divDescribCardapioItens = window.document.createElement('div');
            
            divCardCardapio.classList.add('card-cardapio');
            divDiaArea.classList.add('dia-area');
            a.classList.add('nome-dia');
            divDescribCardapio.classList.add('describ-cardapio');
            divDescribCardapioItens.classList.add('describ-cardapio-itens');

            a.textContent = item.diaDaSemana;
            
            const liTituloPrincipal = window.document.createElement('li');
            const aTituloPrincipal = window.document.createElement('a');
            aTituloPrincipal.textContent = 'Principal:';
            liTituloPrincipal.appendChild(aTituloPrincipal);
            divDescribCardapioItens.appendChild(liTituloPrincipal);

            item.itemsPrincipal.forEach(principal => {
                const li = window.document.createElement('li');
                const a2 = window.document.createElement('a');
                a2.textContent = principal.nome;
                li.appendChild(a2);
                divDescribCardapioItens.appendChild(li);
            });

            const divLinhaHorizontal = window.document.createElement('div');
            divLinhaHorizontal.classList.add('linha-horizontal');
            divDescribCardapioItens.appendChild(divLinhaHorizontal);

            const liTituloComplemento = window.document.createElement('li');
            const aTituloComplemento = window.document.createElement('a');
            aTituloComplemento.textContent = 'Complementos:';
            liTituloComplemento.appendChild(aTituloComplemento);
            divDescribCardapioItens.appendChild(liTituloComplemento);

            const br1 = window.document.createElement('br');
            const br2 = window.document.createElement('br');
            divDescribCardapioItens.appendChild(br1);
            divDescribCardapioItens.appendChild(br2);

            item.itemsComplemento.forEach(complemento => {
                const li2 = window.document.createElement('li');
                const a3 = window.document.createElement('a');
                a3.textContent = complemento.nome;
                li2.appendChild(a3);
                divDescribCardapioItens.appendChild(li2);
            });

            divDiaArea.appendChild(a);
            divDescribCardapio.appendChild(divDescribCardapioItens);
            divCardCardapio.appendChild(divDiaArea);
            divCardCardapio.appendChild(divDescribCardapio);

            if (index < 2) {
                linhas[0].appendChild(divCardCardapio);
            } else if (index < 4) {
                linhas[1].appendChild(divCardCardapio);
            } else {
                linhas[2].appendChild(divCardCardapio);
            }
        });

        linhas.forEach(linha => divLinhaCardapio.appendChild(linha));

    } catch (erro) {
        console.error('Erro ao buscar dados: ', erro);
    }
});
