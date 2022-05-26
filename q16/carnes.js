import {input} from './io_utils.js'


function main(){

    const carnes = preço()    
    /*if (eh_cartao()){
    const desconto = preço_total * 0.05
    const preço = preço_total - desconto
    }
    */
}
function preço(){
    const tipo = menu()
    if (tipo === 1){
        if (eh_promoçao()){
            if (eh_cartao()){
                const qtd = Number(input('Digite a quantidade de quilos de filé que vai querer: ')) 
                while (qtd > 5 || qtd <0){
                    console.log('Você não digitou uma quantidade permitida')
                    const qtd = Number(input('Digite a quantidade de filé que vai querer novamente: ')) 
                }
                const preço = qtd * 4.90
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'Filé'
                cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                cupom_fiscal += `\n O preço é ${preço} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total} reais`

                console.log(cupom_fiscal)
            }else{
                const qtd = Number(input('Digite a quantidade de quilos de filé que vai querer: ')) 
                while (qtd > 5 || qtd <0){
                    console.log('Você não digitou uma quantidade permitida')
                    const qtd = Number(input('Digite a quantidade de filé que vai querer novamente: ')) 
                }
                const preço = qtd * 4.90
                const desconto = 0
                const preço_total = preço
                let cupom_fiscal = 'Filé'
                cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                cupom_fiscal += `\n O preço é ${preço} reais`
                cupom_fiscal += '\n O pagamento é em espécie'
                cupom_fiscal += `\n O desconto é de ${desconto} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço} reais`

                console.log(cupom_fiscal)
            }

        }else {
            const qtd = Number(input('Digite a quantidade de quilos de filé que vai querer: ')) 
                while (qtd < 5){
                    console.log('Você não digitou uma quantidade permitida')
                    const qtd = Number(input('Digite a quantidade de filé que vai querer novamente: ')) 
                }
                const preço = qtd * 5.80
                const desconto = 0
                let cupom_fiscal = 'Filé'
                cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                cupom_fiscal += `\n O preço é ${preço} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço} reais`

                console.log(cupom_fiscal)
        }
    }else if (tipo === 2){
        if (eh_promoçao()){
            if (eh_cartao()){
                const qtd = Number(input('Digite a quantidade de quilos de picanha que vai querer: ')) 
                while (qtd > 5 || qtd <0){
                    console.log('Você não digitou uma quantidade permitida')
                    const qtd = Number(input('Digite a quantidade de picanha que vai querer novamente: ')) 
                }
                const preço = qtd * 6.90
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'picanha'
                cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                cupom_fiscal += `\n O preço é ${preço} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total} reais`

                console.log(cupom_fiscal)
            }else{
                const qtd = Number(input('Digite a quantidade de quilos de picanha que vai querer: ')) 
                while (qtd > 5 || qtd <0){
                    console.log('Você não digitou uma quantidade permitida')
                    const qtd = Number(input('Digite a quantidade de picanha que vai querer novamente: ')) 
                }
                const preço = qtd * 6.90
                const desconto = 0
                const preço_total = preço
                let cupom_fiscal = 'picanha'
                cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                cupom_fiscal += `\n O preço é ${preço} reais`
                cupom_fiscal += '\n O pagamento é em espécie'
                cupom_fiscal += `\n O desconto é de ${desconto} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço} reais`

                console.log(cupom_fiscal)
            }

        }else {
            const qtd = Number(input('Digite a quantidade de quilos de picanha que vai querer: ')) 
                while (qtd < 5){
                    console.log('Você não digitou uma quantidade permitida')
                    const qtd = Number(input('Digite a quantidade de picanha que vai querer novamente: ')) 
                }
                const preço = qtd * 7.80
                const desconto = 0
                let cupom_fiscal = 'Picanha'
                cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                cupom_fiscal += `\n O preço é ${preço} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço} reais`

               console.log(cupom_fiscal)
        }
    }else if (tipo === 3){
        if (eh_promoçao()){
            if (eh_cartao()){
                const qtd = Number(input('Digite a quantidade de quilos de alcatra que vai querer: ')) 
                while (qtd > 5 || qtd <0){
                    console.log('Você não digitou uma quantidade permitida')
                    const qtd = Number(input('Digite a quantidade de alcatra que vai querer novamente: ')) 
                }
                const preço = qtd * 5.90
                const desconto = preço * 0.05
                const preço_total = preço - desconto
                let cupom_fiscal = 'alcatra'
                cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                cupom_fiscal += `\n O preço é ${preço} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço_total} reais`

                console.log(cupom_fiscal)
            }else{
                const qtd = Number(input('Digite a quantidade de quilos de alcatra que vai querer: ')) 
                while (qtd > 5 || qtd <0){
                    console.log('Você não digitou uma quantidade permitida')
                    const qtd = Number(input('Digite a quantidade de alcatra que vai querer novamente: ')) 
                }
                const preço = qtd * 5.90
                const desconto = 0
                const preço_total = preço
                let cupom_fiscal = 'alcatra'
                cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                cupom_fiscal += `\n O preço é ${preço} reais`
                cupom_fiscal += '\n O pagamento é em espécie'
                cupom_fiscal += `\n O desconto é de ${desconto} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço} reais`

                console.log(cupom_fiscal)
            }

        }else {
            const qtd = Number(input('Digite a quantidade de quilos de alcatra que vai querer: ')) 
                while (qtd < 5){
                    console.log('Você não digitou uma quantidade permitida')
                    const qtd = Number(input('Digite a quantidade de alcatra que vai querer novamente: ')) 
                }
                const preço = qtd * 6.80
                const desconto = 0
                let cupom_fiscal = 'Alcatra'
                cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                cupom_fiscal += `\n O preço é ${preço} reais`
                cupom_fiscal += '\n O pagamento é no cartão'
                cupom_fiscal += `\n O desconto é de ${desconto} reais`
                cupom_fiscal += `\n O total a pagar é de ${preço} reais`

               console.log(cupom_fiscal)
        }
    }else if (tipo === 4){
        if (eh_promoçao()){
            const promoçao = input('Qual é a carne da promoção? ')
            if (promoçao === 'file'){
                if (eh_cartao()){
                    const qtd_file = Number(input('Digite a quantidade de quilos de filé que vai querer: ')) 
                    while (qtd_file > 5 || qtd_file <0){
                        console.log('Você não digitou uma quantidade permitida')
                        const qtd_file = Number(input('Digite a quantidade de filé que vai querer novamente: ')) 
                    }
                    const qtd_picanha = Number(input('Digite a quantidade de quilos de picanha que vai querer: '))
                    while (qtd < 5){
                        console.log('Você não digitou uma quantidade permitida')
                        const qtd = Number(input('Digite a quantidade de picanha que vai querer novamente: ')) 
                    }
                    const qtd = qtd_file + qtd_picanha
                    const preço = (qtd_file * 4.90) + (qtd_picanha * 7.80)
                    const desconto = preço * 0.05
                    const preço_total = preço - desconto
                    let cupom_fiscal = 'Filé, Picanha'
                    cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                    cupom_fiscal += `\n O preço é ${preço} reais`
                    cupom_fiscal += '\n O pagamento é no cartão'
                    cupom_fiscal += `\n O desconto é de ${desconto} reais`
                    cupom_fiscal += `\n O total a pagar é de ${preço_total} reais`

                    console.log(cupom_fiscal)
                }else{
                    const qtd_file = Number(input('Digite a quantidade de quilos de filé que vai querer: ')) 
                    while (qtd_file > 5 || qtd_file <0){
                        console.log('Você não digitou uma quantidade permitida')
                        const qtd_file = Number(input('Digite a quantidade de filé que vai querer novamente: ')) 
                    }
                    const qtd_picanha = Number(input('Digite a quantidade de quilos de picanha que vai querer: '))
                    while (qtd < 5){
                        console.log('Você não digitou uma quantidade permitida')
                        const qtd = Number(input('Digite a quantidade de picanha que vai querer novamente: ')) 
                    }
                    const qtd = qtd_file + qtd_picanha
                    const preço = (qtd_file * 4.90) + (qtd_picanha * 7.80)
                    const desconto = 0
                    const preço_total = preço - desconto
                    let cupom_fiscal = 'Filé, Picanha'
                    cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                    cupom_fiscal += `\n O preço é ${preço} reais`
                    cupom_fiscal += '\n O pagamento é no cartão'
                    cupom_fiscal += `\n O desconto é de ${desconto} reais`
                    cupom_fiscal += `\n O total a pagar é de ${preço_total} reais`

                    console.log(cupom_fiscal)
                }
            }else if (promoçao === 'picanha'){
                if (eh_cartao()){
                    const qtd_file = Number(input('Digite a quantidade de quilos de filé que vai querer: ')) 
                    while (qtd_file <= 5){
                        console.log('Você não digitou uma quantidade permitida')
                        const qtd_file = Number(input('Digite a quantidade de filé que vai querer novamente: ')) 
                    }
                    const qtd_picanha = Number(input('Digite a quantidade de quilos de picanha que vai querer: '))
                    while (qtd_picanha > 5 || qtd_picanha <0){
                        console.log('Você não digitou uma quantidade permitida')
                        const qtd = Number(input('Digite a quantidade de picanha que vai querer novamente: ')) 
                    }
                    const qtd = qtd_file + qtd_picanha
                    const preço = (qtd_file * 5.80) + (qtd_picanha * 6.90)
                    const desconto = preço * 0.05
                    const preço_total = preço - desconto
                    let cupom_fiscal = 'Filé, Picanha'
                    cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                    cupom_fiscal += `\n O preço é ${preço} reais`
                    cupom_fiscal += '\n O pagamento é no cartão'
                    cupom_fiscal += `\n O desconto é de ${desconto} reais`
                    cupom_fiscal += `\n O total a pagar é de ${preço_total} reais`

                    console.log(cupom_fiscal)
                }else{
                    const qtd_file = Number(input('Digite a quantidade de quilos de filé que vai querer: ')) 
                    while (qtd_file <= 5){
                        console.log('Você não digitou uma quantidade permitida')
                        const qtd_file = Number(input('Digite a quantidade de filé que vai querer novamente: ')) 
                    }
                    const qtd_picanha = Number(input('Digite a quantidade de quilos de picanha que vai querer: '))
                    while (qtd_picanha > 5 || qtd_picanha <0){
                        console.log('Você não digitou uma quantidade permitida')
                        const qtd = Number(input('Digite a quantidade de picanha que vai querer novamente: ')) 
                    }
                    const qtd = qtd_file + qtd_picanha
                    const preço = (qtd_file * 5.80) + (qtd_picanha * 6.90)
                    const desconto = 0
                    const preço_total = preço - desconto
                    let cupom_fiscal = 'Filé, Picanha'
                    cupom_fiscal += `\n A quantidade é de ${qtd} kg`
                    cupom_fiscal += `\n O preço é ${preço} reais`
                    cupom_fiscal += '\n O pagamento é no cartão'
                    cupom_fiscal += `\n O desconto é de ${desconto} reais`
                    cupom_fiscal += `\n O total a pagar é de ${preço_total} reais`

                    console.log(cupom_fiscal)
                }
            }       
        }        
    }else if (tipo === 5){
        
    }
}
function eh_promoçao(){
    const promoção = input('Vai levar carne na promoção? ')
    while (!(promoção === 'sim' || 'nao')){
        const promoção = input('Vai levar carne na promoção? ')
    }
    if (promoção === 'sim'){
    return true    
    }else{
        return false
    }
}
function menu(){
    let menu = '\n1 - Filé'
    menu += '\n2 - Alcatra'
    menu += '\n3 - Picanha'
    menu += '\n4 - Filé, Picanha'
    menu += '\n5 - Filé, Alcatra'
    menu += '\n6 - Picanha, Alcatra'
    menu += '\n7 - Filé, Alcatra, Picanha'

    console.log(menu)
    let opçao = Number(input('Digite aqui a opção desejada: '))
    while(!(opçao <=7 && opçao>=1)){
        console.log('Você digitou uma opção inválida')
        console.clear()
        console.log(menu)
        opçao = Number(input('Digite aqui a opção desejada novamente: '))

    }
    return opçao
}
main() 