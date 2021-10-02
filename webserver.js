function createWebserver() {
    const start = () => {
        console.log('[Webserver] Starting...')
        console.log('[Webserver] Waiting for ports to connect...')
        console.log('[Webserver] Starting done!')
    }

    const stop = () => {
        console.log('[Webserver] Stoping...')
        console.log('[Webserver] Gracefully waiting for all clients...')
        console.log('[Webserver] Closing all ports...')
        console.log('[Webserver] Stopping done!')
    }

    return {
        start, stop
    }
}

export default createWebserver