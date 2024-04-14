const form = document.getElementById('signUpForm')
const addTech = document.getElementById('addTech')

let techCount = 0
let devs = []

function createLabel(htmlFor, text){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(name, id, className, type, value, placeholder){
    const input = document.createElement('input')
    input.value = value
    input.name = name
    input.id = id
    input.className = className
    input.placeholder = placeholder
    input.type = type
    return input
}

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const dev = {
        name: document.getElementById('devName').value,
        techs: []
    }

    for(let i = 1; i <= techCount; i++){
        const tech = {
            techName: document.getElementById('techName'+ i).value,
            techXP: document.querySelector('input[name="xp_' + i +'"]:checked').value
        }
        dev.techs.push(tech)
    }
    console.log(dev)
    devs.push(dev)

    alert('Desenvolvedor cadastrado com sucesso!\n\n' +
        'Nome: ' + dev.name + '\n' +
        'Tecnologias: \n' + dev.techs.map(tech => ' - ' + tech.techName + '\n').join('')
    )

    document.getElementById('devName').value = ''
    document.querySelectorAll('.techName').forEach(input => input.value = '')
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false)
})

addTech.addEventListener('click', function(ev){
    ev.preventDefault()
    techCount++
    const section = document.getElementById('techs')

    const techNameLabel = document.createElement('label')
    techNameLabel.textContent = 'Nome da tecnologia: '
    techNameLabel.setAttribute('for', 'techName' + techCount)
    const techNameInput = document.createElement('input')
    techNameInput.setAttribute('type', 'text')
    techNameInput.setAttribute('name', 'techName' + techCount)
    techNameInput.setAttribute('id', 'techName' + techCount)
    techNameInput.setAttribute('class', 'techName')

    const xpLabel = document.createElement('label')
    xpLabel.textContent = 'Tempo de experiência:'
    xpLabel.setAttribute('for', 'xp')
    const xpRadio1 = document.createElement('input')
    xpRadio1.setAttribute('type', 'radio')
    xpRadio1.setAttribute('name', 'xp_'+ techCount)
    xpRadio1.setAttribute('id', 'xp1_' + techCount)
    xpRadio1.setAttribute('value', '0to2years')
    const xpLabel1 = document.createElement('label')
    xpLabel1.textContent = '0 - 2 anos'
    xpLabel1.setAttribute('for', 'xp1_' + techCount)

    const xpRadio2 = document.createElement('input')
    xpRadio2.setAttribute('type', 'radio')
    xpRadio2.setAttribute('name', 'xp_'+ techCount)
    xpRadio2.setAttribute('id', 'xp2_'  + techCount)
    xpRadio2.setAttribute('value', '3to4years')
    const xpLabel2 = document.createElement('label')
    xpLabel2.textContent = '3 - 4 anos'
    xpLabel2.setAttribute('for', 'xp2_' + techCount)

    const xpRadio3 = document.createElement('input')
    xpRadio3.setAttribute('type', 'radio')
    xpRadio3.setAttribute('name', 'xp_'+ techCount)
    xpRadio3.setAttribute('id', 'xp3_' + techCount)
    xpRadio3.setAttribute('value', '5orMoreYears')
    const xpLabel3 = document.createElement('label')
    xpLabel3.textContent = '5+ anos'
    xpLabel3.setAttribute('for', 'xp3_' + techCount)

    const remove = document.createElement('button')
    remove.textContent = 'Remover'
    remove.setAttribute('id', 'removeButton')
    remove.addEventListener('click', function(ev){
        ev.preventDefault()

        section.removeChild(techNameLabel)
        section.removeChild(techNameInput)
        section.removeChild(xpLabel)
        section.removeChild(xpRadio1)
        section.removeChild(xpLabel1)
        section.removeChild(xpRadio2)
        section.removeChild(xpLabel2)
        section.removeChild(xpRadio3)
        section.removeChild(xpLabel3)
        section.removeChild(remove)
    })
    
    if(techCount == 1){
        section.appendChild(document.createElement('hr'))
        console.log('criando hr')
    }
    section.appendChild(techNameLabel)
    section.appendChild(techNameInput)
    section.appendChild(document.createElement('br'))
    section.appendChild(document.createElement('br'))
    section.appendChild(xpLabel)
    section.appendChild(xpRadio1)
    section.appendChild(xpLabel1)
    section.appendChild(xpRadio2)
    section.appendChild(xpLabel2)
    section.appendChild(xpRadio3)
    section.appendChild(xpLabel3)
    section.appendChild(document.createElement('br'))
    section.appendChild(document.createElement('br'))
    section.appendChild(remove)
    section.appendChild(document.createElement('hr'))

})