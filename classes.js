// criar 4 possiveis personagens: Guerreiro, Mago, Monstro, Zombie

class Personagem {

    nome;
    _vida = 1;
    maxVida = 1;
    ataque = 0;
    defesa = 0;
    tipoPersonagem = 'nome';

    constructor(nome){
        this.nome= nome;
    }


    get vida(){
        return this._vida;
    }
    set vida(novaVida){
        this._vida =  novaVida < 0 ? 0:novaVida;
    }

}

// criando os personagens

class Guerreiro extends Personagem{

    constructor(){
        super('Warrior');
        this.vida = 100;
        this.maxVida = this.vida;
        this.ataque = 10;
        this.defesa = 8;
        this.tipoPersonagem = 'guerreiro';
    }

}

class Mago extends Personagem{

    constructor(){
        super('Wizard');
        this.vida = 80;
        this.maxVida = this.vida;
        this.ataque = 14;
        this.defesa = 3;
        this.tipoPersonagem='mago';
    }

}

class Monstro extends Personagem{

    constructor(){
        super('Monster');
        this.vida = 40;
        this.maxVida = this.vida;
        this.ataque = 4;
        this.defesa = 4; 
        this.tipoPersonagem ='monstro';
    }

}

class Zombie extends Personagem{

    constructor(){
        super('Zombie');
        this.vida = 60;
        this.maxVida = this.vida;
        this.ataque = 5;
        this.defesa = 2; 
        this.tipoPersonagem = 'zombie';
    }

}



// criando as funçoes que atualizam os dados
class Cenario{

    j1;j2;j1Elemento;j2Elemento;

    constructor(j1,j2,j1Elemento,j2Elemento){
        this.j1 = j1;
        this.j2 = j2;
        this.j1Elemento = j1Elemento;
        this.j2Elemento = j2Elemento;
    
     }

    start(){
       this.update();

       // guerreiro
       this.j1Elemento.querySelector('.botaoj1').addEventListener('mousedown',()=> this.atirar(this.j1,this.j2));
       document.querySelector(".img1").src = "images/2.1.PNG";

        //oponente
       this.j2Elemento.querySelector('.botaoj2').addEventListener('mousedown',()=> this.atirar(this.j2,this.j1));
       
       switch (this.j2.tipoPersonagem) {
        case 'mago': document.querySelector(".img2").src = "images/2.2.PNG";
        break;
        case 'monstro': document.querySelector(".img3").src = "images/2.3.PNG";
        break;
        case 'zombie': document.querySelector(".img4").src = "images/2.4.PNG";
        break;

        default: console.log('Tipo de personagem não reconhecido.');
    }
    }


    update(){
        // jogador 1: setando nome , hp  e  barravida
        this.j1Elemento.querySelector('#nomeJ1').innerHTML = `${this.j1.nome}`;
        this.j1Elemento.querySelector('#HP1').innerHTML = `${this.j1.vida}HP`;
        let proporcao_vida = this.j1.vida*100/this.j1.maxVida;
        this.j1Elemento.querySelector('#vidaJ1').style.width = `${proporcao_vida}%`;


        // para o jogador 2
        this.j2Elemento.querySelector('#nomeJ2').innerHTML = `${this.j2.nome}`;
        this.j2Elemento.querySelector('#HP2').innerHTML = `${this.j2.vida}HP`;
        let proporcao_vida2 = this.j2.vida*100/this.j2.maxVida;
        this.j2Elemento.querySelector('#vidaJ2').style.width = `${proporcao_vida2}%`;


    }


    atirar(atirador,alvo){

        if(atirador.vida>0 && alvo.vida >0){

            if(atirador.ataque > alvo.defesa){
                alvo.vida -= atirador.ataque - alvo.defesa;
            }else{
                alvo.vida -= 1;  
            }    

        }
        
        this.update();
        if(alvo.vida == 0 && alvo.nome =='Warrior'){
            document.querySelector('p').innerHTML="";
            let derrota = document.createElement("img");
            derrota.src = "images/derrota.png"; 
            derrota.style.position = 'absolute';
            derrota.style.top = '50%';
            derrota.style.left = '45%';
            derrota.style.transform = 'translate(-50%, -50%)';
            derrota.style.zIndex = '10000'; 
            document.querySelector(".log").appendChild(derrota);
            document.querySelector('h1').innerHTML= "";
           
        }
        if(alvo.vida == 0 && alvo.nome !='Warrior'){
            document.querySelector('p').innerHTML="";
            let vitoria = document.createElement("img");
            vitoria.src = "images/vitoria.png"; 
            vitoria.style.position = 'absolute';
            vitoria.style.top = '50%';
            vitoria.style.left = '45%';
            vitoria.style.transform = 'translate(-50%, -50%)';
            vitoria.style.zIndex = '10000'; 
            document.querySelector(".log").appendChild(vitoria);
            document.querySelector('h1').innerHTML= "";
            
        }
    
    }


}

 
