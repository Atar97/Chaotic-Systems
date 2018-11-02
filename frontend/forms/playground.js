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
            this.space.stepAtInterval(5)
        })
    }
    
    pause() {
        document.getElementById('pause-sim')
        .addEventListener('click', () => {
            this.space.stopStepping()
        })
    }

    reset() {
        document.getElementById('reset-sim')
        .addEventListener('click', () => {
            this.space.stopStepping()
            this.space.bodies = []
        })
    }
}

export default PlaygroundButtons;