function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] insira seus dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'criança masc.jpg')
             } else if (idade < 21) {
                img.setAttribute('src', 'adolescente homem.avif')
             } else if (idade < 50) {
                img.setAttribute('src', 'homem.jpg')
             } else {
                img.setAttribute('src', 'idoso.png')
             }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'criança fem.png')
             } else if (idade < 21) {
                img.setAttribute('src', 'adolescente mulher.jpg')
             } else if (idade < 50) {
                img.setAttribute('src', 'mulher.png')
             } else {
                img.setAttribute('src', 'idosa.jpg')
             }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

// As imagens não foram editadas, portanto seus tamanhos estão diferentes mas está funcional kkk