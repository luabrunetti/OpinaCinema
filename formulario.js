function Confirma() { 
    let Nomemovie = document.getElementById('favoritemovie').value
    let NomeDiretor = document.getElementById('diretormovie').value
    let FilmeFavorito = document.querySelector("Input[name='like-movie']:checked").value
    alert('O filme ' + Nomemovie + ' do diretor ' + NomeDiretor + ' foi marcado como ' + FilmeFavorito)  
    
    window.location.href='tela.html'
}

function Voltar() {
    window.location.href='index.html'
}