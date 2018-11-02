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
            this.space.stepAtInterval(1)
            console.log('start')
        })
    }
    
    pause() {
        document.getElementById('pause-sim')
        .addEventListener('click', () => {
            this.space.stopStepping()
            console.log("pause");
        })
    }

    reset() {
        document.getElementById('reset-sim')
        .addEventListener('click', () => {
            this.space.stopStepping()
            this.space.bodies = []
            console.log("reset");
        })
    }
}

export default PlaygroundButtons;