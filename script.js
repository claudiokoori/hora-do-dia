function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
if (hora >= 0 && hora < 12) {
        img.scr = 'images/fotomanha.png'
        document.body.style.background = '#9e6369'
} else if (hora >= 12 && hora < 18) {
    img.src = 'images/fototarde.png'
    document.body.style.background = '#853917'
} else {
    img.src = 'images/fotonoite.png'
    document.body.style.background = '#0358ab'
}
}