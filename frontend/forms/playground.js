class PlaygroundButtons {
    constructor(space) {
        this.space = space
        this.start()
        this.pause()
        this.reset()
    }

    start() {
        document.getElementById('start-sim')
        .addEventListener('click', () => {
            if (!this.space.handle) {
                this.space.integrate(5)
            }
        })
    }
    
    pause() {
        document.getElementById('pause-sim')
        .addEventListener('click', () => {
            this.space.stopIntegration()
        })
    }

    reset() {
        document.getElementById('reset-sim')
        .addEventListener('click', () => {
            this.space.stopIntegration()
            this.space.bodies = []
        })
    }
}

export default PlaygroundButtons;