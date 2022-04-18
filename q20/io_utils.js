import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export default function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}