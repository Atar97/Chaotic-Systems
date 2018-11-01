import Vector from "../physics/vector";
import CBody from "../physics/c_body";

export default class StarForm {

    constructor(space) {
        this.space = space
        const form = document.getElementById("star-form");
        form.addEventListener('submit', (e) => {
            this.submit(e)
        })
    }

    submit(event) {
        event.preventDefault()
        const si = this.getPosition();
        const vi = new Vector([0, 0])
        const type = this.getType()  
        const body = new CBody(type.mass, si, vi, type.color)     
        this.space.add(body) 
    }

    getPosition() {
        const six = Number(document.getElementById("star-six").value);
        const siy = Number(document.getElementById("star-siy").value);
        return new Vector([six, siy]);
    }

    getType() {
        const type = document.getElementById("star-type").value 
        switch (type) {
            case 'yd':
                return {
                    mass: 1,
                    color: 'yellow'
                }
            case 'bg':
                return {
                    mass: 10,
                    color: 'blue'
                }
            case 'bsg':
                return {
                    mass: 60,
                    color: 'blue'
                }
            case 'rd':
                return {
                    mass: .5,
                    color: 'red'
                }
        }
    }
}