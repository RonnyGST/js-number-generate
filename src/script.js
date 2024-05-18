let canPress = true;
let canVerify = true;

//Texto gerado quando o usuário aperta no botão de gerar senha
let avisoText = document.createTextNode(`Aperte o botão "Reset" para criar outra senha`);


let userPassLenght = 4;



function verifyPassLenght(){
    if(userPassLenght === 0){
        alert("Insira o tamanho da senha");
        canPress = false;
    } else if(userPassLenght < 4){
        alert("Senha pequena");
        canPress = false;
    } else if(userPassLenght > 25){
        alert("Senha grande");
        canPress = false;
    } else if(userPassLenght >=4 && userPassLenght <=25 && canVerify){
        canPress = true;
        canVerify = false;
    } else if(!canVerify){
        alert("Por favor pressione o botão 'Reset'")
    } else{
        alert("Insira um número válido")
    }
}


//Esta função determina o tamanho da senha
function setNumber(){
    //Pego o elemento com este id e pego também seu valor
    let num = document.getElementById("numField").value;
    userPassLenght = num;
    //Se não for inserido um número válido, irá aparecer essa mensagem
    if (isNaN(num)){
        alert("Insira um número válido")
    }
}


function numberGenerate(){
    verifyPassLenght();
    setNumber();
    
    //Criando uma lista de caracteres possíveis
    let lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    if(canPress){
        
        //Loop para printar os caracteres no número de vezes determinado 
        for(let i = 0; i<userPassLenght; i++){
        
        //Criando um número aleatório com o número de possibilidades igual a quantidade de elementos da variável "lista"
        let rdm = Math.floor(Math.random() * lista.length);
        
        //Printando o caractere de acordo com a posição (Index) de elemento da variável "lista", mas usando a referência do número aleatório da variável "rdm"
        let criar = document.createTextNode(lista[rdm]);
        document.getElementById("keyNum").appendChild(criar);
        
        document.getElementById("aviso").appendChild(avisoText);
        }
        canPress = false;
    }
}


function keywordGenerate(){
    verifyPassLenght();
    setNumber();
    
    //Criando uma lista de caracteres possíveis
    let lista = ["0", "a", "A", "b", "B", "1", "c", "C", "d", "D", "e","2", "E", "f", "F", "g", "G","3", "h", "H", "i", "I", "j","4", "J", "k", "K", "l", "L","5", "m", "M", "n", "N", "o","6", "O", "p", "P", "q", "Q","7", "u", "U", "v", "V", "w","8", "W", "x", "X", "y", "Y", "9", "z", "Z"];
    
    if(canPress){
        
        //Loop para printar os caracteres no número de vezes determinado 
        for(let i = 0; i<userPassLenght; i++){
        
        //Criando um número aleatório com o número de possibilidades igual a quantidade de elementos da variável "lista"
        let rdm = Math.floor(Math.random() * lista.length);
        
        //Printando o caractere de acordo com a posição (Index) de elemento da variável "lista", mas usando a referência do número aleatório da variável "rdm"
        let criar = document.createTextNode(lista[rdm]);
        document.getElementById("keyAlfaNum").appendChild(criar);
        }
        canPress = false;
    }
    document.getElementById("aviso").appendChild(avisoText);
}


function symbolKeywordGenerate(){
    verifyPassLenght();
    setNumber();
    
    //Criando uma lista de caracteres possíveis
    let lista = ["0", "@", "a", "A", "#", "b", "B", "$", "1", "c", "C", "d", "&", "D", "e","2", "E", "f", "F", "g", "G","3", "h", "H", "i", "I", "@", "j","4", "#", "J", "k", "K", "l", "L","5", "$", "m", "M", "n", "&", "N", "o","6", "@", "O", "p", "P", "q", "Q", "7", "u", "U", "v", "V", "w", "8", "W", "x", "X", "y", "$", "Y", "9", "#", "z", "Z", "&"];
    
    if(canPress){
        
        //Loop para printar os caracteres no número de vezes determinado 
        for(let i = 0; i<userPassLenght; i++){
        
        //Criando um número aleatório com o número de possibilidades igual a quantidade de elementos da variável "lista"
        let rdm = Math.floor(Math.random() * lista.length);
        
        //Printando o caractere de acordo com a posição (Index) de elemento da variável "lista", mas usando a referência do número aleatório da variável "rand"
        let criar = document.createTextNode(lista[rdm]);
        document.getElementById("keyAlfaNumSymbol").appendChild(criar);
        
        
        }
        canPress = false;
    }
    document.getElementById("aviso").appendChild(avisoText);
}

function reset(){
    
    //Definindo o campo de texto das senhas
    let numRef = document.getElementById("keyNum").innerHTML = "";
    
    let alfaNumRef = document.getElementById("keyAlfaNum").innerHTML = "";
    
    let symbolRef = document.getElementById("keyAlfaNumSymbol").innerHTML = "";
    
    canPress = true;
    canVerify = true;
    
    //Tornando o texto do aviso em branco 
    document.getElementById("aviso").innerHTML = "";
}