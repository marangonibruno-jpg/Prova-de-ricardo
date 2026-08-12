const botao = document.querySelector('button');
const texto = document.querySelector('p');

botao.addEventListener('click', () => {
    texto.textContent = 'Cartas de Van Gogh Segundo os registros históricos, naquela mesma noite Van Gogh foi até um bordel próximo e entregou parte da orelha a uma mulher chamada Rachel. O episódio chamou a atenção da polícia e ficou conhecido como um dos acontecimentos mais marcantes e tristes da vida do artista.';
    });

    botao.addEventListener('mouseenter', () => {});

    botao.addEventListener('mouseleave', () => {});

    window.addEventListener('keydown', () => {});

    const titulo = document.querySelector('h1');
    titulo.textContent = 'A historia de Van Gogh';

    const caixa = document.getElementById('conteudo');

    caixa.innerHTML = '<strong>Seus Grandes Feitos</strong>';

    document.body.style.backgroundColor = 'white';

    caixa.classList.add('modo-escuro');

    caixa.classList.remove('escondido');

    caixa.classList.toggle('modo-escuro');

    const pi = 3.14;

    let contador = 0;

    let sorteio = Math.random();

    Math.floor(4.9);

    setTimeout(() => {
        alert('Seja bem-vindo');
        }, 2000);

        setInterval(() => {
            console.log('Relogio');
            }, 1000);