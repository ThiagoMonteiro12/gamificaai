let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")
function abrirFecharMenu() {

    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")

        iconeX.style.display = "inline"

        iconeBarras.style.display = "none"
    }
    else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }

}

window.onresize = () => {

    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

//carrosel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        slideAtual++
    }
    else {
        slideAtual = 0
    }

    banner.classList.add(slides[slideAtual])
}

const mostrarSlideAnterior = () => {
    banner.classList.remove(slides[slideAtual])
    if (slideAtual > 0) {
        slideAtual--
    }
    else {
        slideAtual = 2
    }
    banner.classList.add(slides[slideAtual])
}

const selecionarSlide = (indiceSlide) => {

    slides.forEach(slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])

}

let listaCases = [
    {
        image: "https://unsplash.it/600/400?image=24",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionários devem propor e implementar ideias inovadoras"
    },
    {
        image: "https://unsplash.it/600/400?image=4",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para o seu programa de treinamento"
    },
    {
        image: "https://unsplash.it/600/400?image=20",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking"
    },
    {
        image: "https://unsplash.it/600/400?image=69",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento físico"
    }
]
const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    let template = ""

    listaCases.forEach(cardCase => {
        template += ` <div class="card">
        <img src="${cardCase.image}" alt="">
        <p>${cardCase.descricao}</p>
        <button>Ver mais</button>
    </div>`
    })
    elementoLista.innerHTML = template
}
const solicitarOrcamento = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisicao para a api
    // 127.0.0.1 = localhost
    // Método HTTP POST - Create -> Cadastrar ou criar 
    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
        .then(resposta => {
            console.log(resposta)

            document.querySelector("#contato-form").reset()

            alert("Solicitação cadastrada")

        })

        .catch(erro => {
            console.error(erro)

            alert("Erro na requisição")
        })

        event.preventDefault()
}