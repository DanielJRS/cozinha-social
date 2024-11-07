const URLFaq = 'https://3m21d2d5.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22faq%22%5D%7B%0A++++pergunta%2C%0A++++++resposta%0A%7D';

window.addEventListener('load', async () => {
    try {
        const resultado = await fetch(URLFaq, {
            method: 'GET'
        });

        const dados = await resultado.json();
        console.log(dados);

        const divFaqContainer = document.querySelector('.faqs-container');

        dados.result.forEach((item) => {
            const divFaq = document.createElement('div');
            const h3Title = document.createElement('h3');
            const pText = document.createElement('p');
            const btnToggle = document.createElement('button');
            const iconDown = document.createElement('i');
            const iconClose = document.createElement('i');

            divFaq.classList.add('faq');
            h3Title.classList.add('faq-title');
            pText.classList.add('faq-text');
            btnToggle.classList.add('faq-toggle');
            iconDown.classList.add('fas', 'fa-chevron-down');
            iconClose.classList.add('fas', 'fa-times');

            h3Title.textContent = item.pergunta;
            pText.textContent = item.resposta;
            pText.style.display = 'none'; 

            btnToggle.appendChild(iconDown);
            btnToggle.appendChild(iconClose);

            btnToggle.addEventListener('click', () => {
                const isVisible = pText.style.display === 'block';
                pText.style.display = isVisible ? 'none' : 'block';
                divFaq.classList.toggle('active');
            });

            divFaq.appendChild(h3Title);
            divFaq.appendChild(pText);
            divFaq.appendChild(btnToggle);
            divFaqContainer.appendChild(divFaq);
        });

    } catch (erro) {
        console.error('Erro ao buscar dados: ', erro);
    }
});
