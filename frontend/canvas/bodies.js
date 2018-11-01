import Vector from "../physics/vector";
import Space from "../physics/space";
import CBody from "../physics/c_body";

export default (space) => {
    const canvasBodies = document.getElementById("bodies");
    const bodiesctx = canvasBodies.getContext("2d"); 
    space.stepAtInterval(1, bodiesctx);
}