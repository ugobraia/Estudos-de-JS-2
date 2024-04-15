console.log('sim')

document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert('A informação salva é ' + info)
})

document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    const t = localStorage.getItem('text')
    alert('O texto salvo é ' + t)
})

document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    // coookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info='+ input.value + ';'
    const expiration = 'expires='+ new Date(2024, 10, 10) + ';'
    const path = 'path=/;'

    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function(){
    const input = document.getElementById('cookie2')
    // coookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text='+ input.value + ';'
    const expiration = 'expires='+ new Date(2024, 9, 9) + ';'
    const path = 'path=/;'

    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})