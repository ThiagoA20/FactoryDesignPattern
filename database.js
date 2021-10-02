function createDatabase() {
    const start = () => {
        console.log('[Database] Starting...')
        console.log('[Database] Connecting to Postgres...')
        console.log('[Database] Running Migrations...')
        console.log('[Database] Sucessfully connected!')
    }

    const stop = () => {
        console.log('[Database] Stoping...')
        console.log('[Database] Closing Postgres connection...')
        console.log('[Database] Stoping done!')
    }

    return {
        start, stop
    }
}

export default createDatabase