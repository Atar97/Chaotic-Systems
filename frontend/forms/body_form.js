import Vector from '../physics/vector';
import CBody from '../physics/c_body';

export default class BodyForm {

    constructor(space) {
        this.space = space
        const form = document.getElementById("celestial-bodies");
        form.addEventListener('submit', (e) => {
            this.submit(e)
        })
    }

    submit(event) {
        event.preventDefault();
        const mass = this.getMass()
        const si = this.getPosition()
        const vi = this.getVelocity()
        const color = document.getElementById("planet-color").value
        const body = new CBody(mass, si, vi, color)
        this.space.add(body)
    }
    
    getMass() {
        let mass = Number(document.getElementById("mass").value);
        if (mass == 0) {
            mass = 1;
        }
        return mass;
    }
    
    getPosition() {
        const six = Number(document.getElementById("six").value);
        const siy = Number(document.getElementById("siy").value);
        return new Vector([six, siy]);
    }
    
    getVelocity() {
        const vix = Number(document.getElementById("vix").value);
        const viy = Number(document.getElementById("viy").value);
        return new Vector([vix, viy]);
    }
}

