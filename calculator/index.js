function addToDisplay(value) {
    document.getElementById("Display").value += value

}

function clearDispaly() {
    document.getElementById("Display").value = ""
}

function calculetion() {
    try {
        document.getElementById("Display").value = eval(document.getElementById("Display").value)

    } catch {

    }
}


