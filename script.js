//  monitora todo o body (tudo) e lê qualquer evento que ocorra
document.body.addEventListener('keyup', (event)=>{
    //  .code / toca com de acordo com a tecla pressionada
    playSound(event.code.toLowerCase());
});

//  registra o que foi digitado no campo
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    //  se diferente de vazio, armazena em array o que foi digitado no campo
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
})

// tocar o som
function playSound(sound){
    //  completa a variavel com um valor dinamico
    let audioElement = document.querySelector(`#s_${sound}`);
    //  identifica as teclas pressionadas para exibir
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    //  verificando se a tecla pressionada possui som ou não
    if(audioElement){
        //  reinicia o audio no momento de teclar
        audioElement.currentTime = 0;
        audioElement.play();
    }

    //  ilumina a tecla digitada
    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300);
    }

};

//  tocando composição no campo
function playComposition(songArray){
    //  executar loop em sequencia
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;
    }

    for(let songItem of songArray){
        playSound(`key${songItem}`);
    }
}

