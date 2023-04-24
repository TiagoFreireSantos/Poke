import app from './app'

function main () {
    try {
        const porta = 3001
        app.listen(porta, 'localhost', async () => {
            console.log('Servidor inicializado na porta: ', porta)
        })
    } catch (error) {
        console.log('Erro ao tentar subir o servidos')
    }
}

main()
