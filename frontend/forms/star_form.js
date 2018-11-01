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
        const vi = new Vector([0, .0001])  
        const body = new CBody(mass, si, vi, color)      
    }

    getPosition() {
        const six = Number(document.getElementById("star-six").value);
        const siy = Number(document.getElementById("star-siy").value);
        return new Vector([six, siy]);
    }

    getType() {
        const type = document.getElementById("star-type")
    }
}