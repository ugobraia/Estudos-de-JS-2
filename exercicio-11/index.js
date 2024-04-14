const time = []

function escalar(){
    const jogador = {}
    const section = document.getElementById('jogadores')

    jogador.nome = document.getElementById('nome').value
    jogador.posicao = document.getElementById('posicao').value
    jogador.camisa = document.getElementById('camisa').value
    console.log(jogador)
    time.push(jogador)

    const h3 = document.createElement('h3')
    h3.id = 'jogador' + jogador.camisa
    h3.innerText = jogador.nome
    const ul = document.createElement('ul')
    ul.id = 'detalhes' + jogador.camisa

    const posicaoLi = document.createElement('li')
    posicaoLi.innerText = 'Posição: ' + jogador.posicao
    const camisaLi = document.createElement('li')
    camisaLi.innerText = 'Camisa: ' + jogador.camisa

    ul.appendChild(posicaoLi)
    ul.appendChild(camisaLi)

    document.getElementById('nome').value = ''
    document.getElementById('posicao').value = ''
    document.getElementById('camisa').value = ''

    section.appendChild(h3)
    section.appendChild(ul)

    console.log(time)
}

function remover(){
    const numeroCamisa = document.getElementById('remover').value
    const jogadorIndex = time.findIndex(jogador => jogador.camisa === numeroCamisa)

    if(jogadorIndex === -1){
        alert('Jogador não encontrado.')
        return
    }

    const confirmacao = confirm('Deseja remover o seguinte jogador?\nNome: '+ time[jogadorIndex].nome + '\nPosição: ' + time[jogadorIndex].posicao + '\nCamisa: ' + time[jogadorIndex].camisa)

    if(confirmacao){
        time.splice(jogadorIndex, 1)

        const section = document.getElementById('jogadores')
        const h3 = document.getElementById('jogador' + numeroCamisa)
        const ul = document.getElementById('detalhes' + numeroCamisa)
        
        section.removeChild(h3)
        section.removeChild(ul)
        alert('Jogador removido com sucesso.')
    } else {
        alert('Operação cancelada.')
    }

    console.log(time)
}