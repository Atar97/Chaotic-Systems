export default () => {
    const canvas = document.getElementById("background");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 800, 500)
}