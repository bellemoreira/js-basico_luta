

criarPersonagem = (e) =>{

    // selecionando a imagem pelo  'data-tipo'
    let tipoPersonagem = e.target.getAttribute('data-tipo');
  
    if (e.target.tagName === 'IMG') {
        
        //instanciando o oponente
        switch (tipoPersonagem) {
            case 'mago': jogadordois = new Mago();
            break;

            case 'monstro': jogadordois = new Monstro();
            break;

            case 'zombie': jogadordois = new Zombie();
            break;

            default: console.log('Tipo de personagem não reconhecido.');
        }
    }
     
//criando cenario 
    cenario =  new Cenario(jogadorum,jogadordois,
        document.querySelector('.jogador1'), document.querySelector('.jogador2'));
        
    
 
// tirando os elementos que nao foram selecionados e trocando imagens
document.querySelector('.imagensoponentes').querySelectorAll('img').forEach(element =>{
    if(element.getAttribute('data-tipo') !== tipoPersonagem){
        element.remove();
    };
});
document.querySelector('p').innerHTML="vença seu inimigo antes que você morra";

cenario.start();
}

let jogadorum = new Guerreiro();
let jogadordois = null;
let cenario;

document.querySelector('.imagensoponentes').addEventListener("click", criarPersonagem);

