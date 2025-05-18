const textBox = document.getElementById("text-box")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")

let temp;

textBox.addEventListener("focus", function () {
    textBox.value = "";
});

textBox.addEventListener("blur", function () {
    if (textBox.value === "") {
        textBox.value = 0;
    }
});

function convert() {

    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32
        result.textContent = temp + " " + "°F"
    } else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9)
        result.textContent = temp.toFixed(1) + " " + "°C"
    } else {
        result.textContent = "Select a unit"
    }

}