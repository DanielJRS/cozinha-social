const URLPaginas = 'https://3m21d2d5.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22paginas%22%5D%7B%0A++++id%2C%0A++++titulo%2C%0A++++subtitulo%2C%0A++++%22imageUrl%22%3A+imagem.asset-%3Eurl%2C%0A++++tituloInterno%2C%0A++++conteudoInterno%2C%0A++++%22imageUrlInterna%22%3A+imagemInterna.asset-%3Eurl%0A++++%0A%7D';

window.addEventListener('load', async () => {
    try {
        const resultado = await fetch(URLPaginas, {
            method: 'GET'
        });

        const dados = await resultado.json();
        // console.log('Dados recebidos:', dados);

        const divPrincipal = document.querySelector('.carousel-inner');
        const divContents = document.querySelector('.contents');

        divPrincipal.innerHTML = '';
        divContents.innerHTML = '';

        dados.result.forEach((item, index) => {
            const divCard = window.document.createElement('div');
            const img = window.document.createElement('img');
            const divbody = window.document.createElement('div');
            const h5 = window.document.createElement('h5');
            const p = window.document.createElement('p');

            h5.classList.add('card-tittle');
            h5.textContent = item.titulo;

            p.classList.add('card-text');
            p.textContent = item.subtitulo;

            img.src = item.imageUrl;
            img.alt = 'Card image';

            divbody.classList.add('card-body');
            divbody.appendChild(h5);
            divbody.appendChild(p);

            divCard.classList.add('card');
            divCard.dataset.content = `content-${index}`;
            divCard.appendChild(img);
            divCard.appendChild(divbody);

            divPrincipal.appendChild(divCard);

            const divContent = window.document.createElement('div');
            divContent.id = `content-${index}`;
            divContent.classList.add('content');

            const divInterna = window.document.createElement('div');
            
            const divContentTitleArea = window.document.createElement('div');
            divContentTitleArea.classList.add('content-title-area');
            
            const divContentTitle = window.document.createElement('div');
            divContentTitle.classList.add('content-title');
            divContentTitle.innerHTML = item.tituloInterno;
            
            divContentTitleArea.appendChild(divContentTitle);
            
            const divContentArea = window.document.createElement('div');
            divContentArea.classList.add('content-area');
            
            const divImageContainer = window.document.createElement('div');
            const imgContent = window.document.createElement('img');
            imgContent.classList.add('img-content');
            imgContent.src = item.imageUrlInterna;
            divImageContainer.appendChild(imgContent);
            
            const divTextContentArea = window.document.createElement('div');
            divTextContentArea.classList.add('text-content-area');
            
            const divTextContent = window.document.createElement('div');
            divTextContent.classList.add('text-content');
            
            const span = window.document.createElement('span');
            span.innerHTML = item.conteudoInterno;
            
            divTextContent.appendChild(span);
            divTextContentArea.appendChild(divTextContent);
            
            divContentArea.appendChild(divImageContainer);
            divContentArea.appendChild(divTextContentArea);
            
            divInterna.appendChild(divContentTitleArea);
            divInterna.appendChild(divContentArea);
            divContent.appendChild(divInterna);
            
            divContents.appendChild(divContent);
        });

        const cards = document.querySelectorAll(".card");
        const contents = document.querySelectorAll(".content");
        let activeContent = null;

        cards.forEach(card => {
            card.addEventListener("click", function() {
                const contentId = this.dataset.content;
                const contentElement = document.getElementById(contentId);

                console.log('Card clicado:', contentId);
                console.log('Conteúdo correspondente:', contentElement);

                if (activeContent && activeContent === contentElement) {
                    contentElement.classList.remove("active");
                    activeContent = null;
                } else {
                    contents.forEach(content => content.classList.remove("active"));
                    if (contentElement) {
                        contentElement.classList.add("active");
                        activeContent = contentElement;
                    }
                }
            });
        });

    } catch (erro) {
        console.error('Erro ao buscar dados: ', erro);
    }
});