let classes = ['.primer', '.second']
let count = 1;
document.getElementById('radio-1').checked = true;

setInterval(() => {
    proximaImagem()
}, 5000)

function proximaImagem() {
    count++;
    if(count > 2) {
        count = 1
    }

    document.getElementById(`radio-${count}`).checked = true;
}


window.sr = ScrollReveal({ reset: true})

sr.reveal(classes[0], {
    rotate: {x: 0, y: 100, z:0},
    duration: 2000,
    inteval: 16
})

sr.reveal(classes[1], {
    rotate: {x: 0, y: 100, z:0},
    duration: 2000,
    inteval: 16,
    delay: 300
})