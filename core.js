import createDatabase from './database.js'
import createWebserver from './webserver.js'

function createCore(){

    const database = createDatabase()
    const webserver = createWebserver()

    const start = () => {
        console.log('[Core] Starting...')
        database.start()
        webserver.start()
        console.log('[Core] Starting done, System running!')
    }

    const stop = () => {
        console.log('[Core] Stoping...')
        database.stop()
        webserver.stop()
        console.log('[Core] Stoping done!')
    }

    return {
        start, stop
    }
}

export default createCore