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
        this.space.drawAll() 
    }

    getVelocity() {
        const speed = Number(document.getElementById("star-speed").value)/10000;
        return Vector.randomVector(speed);
    }

    getPosition() {
        const distance = Number(document.getElementById("star-distance").value);
        debugger;
        return Vector.randomVector(distance);
    }

    getType() {
        const type = document.getElementById("star-type").value 
        switch (type) {
            case 'yd':
                return { mass: 1, color: "#FFD800" };
            case 'bg':
                return { mass: 10, color: "#8FBDF0" };
            case 'bsg':
                return { mass: 60, color: "#3FA0F1" };
            case 'rd':
                return { mass: 0.5, color: "#E53502" };
        }
    }
}