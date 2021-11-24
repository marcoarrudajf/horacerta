
function Relogio() {
    const data = new Date();
    const hor = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    if (hor < 10) {
        hor = "0" + hor;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (seg < 10) {
        seg = "0" + seg;
    }

    const horas = hor + ":" + min + ":" + seg;

    document.getElementById("rel").value = horas;
}
setInterval(Relogio, 1000);
