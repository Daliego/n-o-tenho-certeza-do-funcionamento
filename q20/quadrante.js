import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const peso_altura = input('Digite o seu peso e a altura: ')
    const [peso, altura] = peso_altura.split(' ').map(Number)
    const indice = imc(peso, altura);
    if(indice<25){
        console.log('Peso normal')
    }else if(indice>25 && indice<30){
        concole.log('Obeso')
    }else if(indice>30){
        console.log('Obeso mórbido')
    }else{}
}

function imc(peso,altura){
    return peso/(altura)**2 }
    
main()