
const horas = document.getElementById('horas')

const contagemRegressiva = (tempo) => {

    const pararContagem = () => {
        clearInterval(id)
    }

    const contar = () => {
        if(tempo === 0) {
            pararContagem()
        }
        console.log(tempo)
        atualizar(tempo)
        tempo--
    }
    const id = setInterval(contar, 1000)
}

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos')
    const minutos = document.getElementById('minutos')
    const horas = document.getElementById('horas')
    const dias = document.getElementById('dias')

    const quantidadedeSegundos = tempo % 60
    const qauntidadeMinutos = Math.floor((tempo % (60 * 60)) / 60)
    const quantidadedeHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60))
    const quantidadedeDias = Math.floor(tempo  / (60 * 60 * 24))

    segundos.innerHTML = zeroaEsquerda
    (quantidadedeSegundos)
    minutos.innerHTML = zeroaEsquerda(qauntidadeMinutos)
    horas.innerHTML = zeroaEsquerda(quantidadedeHoras)
    dias.innerHTML = zeroaEsquerda(quantidadedeDias)
}

const zeroaEsquerda = (num) => {
    return num >=10 ? num : `0${num}`
}

const tempoRestante = () => {
    const dataEvento = new Date ('2022-09-01 08:00:00')
    const hoje = Date.now()
    return Math.floor((dataEvento - hoje) / 1000)
}

contagemRegressiva(tempoRestante())
