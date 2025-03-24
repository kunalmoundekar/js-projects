
const decreaseBTn = document.getElementById("decreaseBTn")
const resetBTn = document.getElementById("resetBTn")
const increaseBTn = document.getElementById("increaseBTn")
const countLable = document.getElementById("countLable")


let count = 0


increaseBTn.addEventListener("click", () => {
    count++
    countLable.innerHTML = count
})

decreaseBTn.addEventListener("click", () => {
    if (count >= 1) {
        count--
        countLable.innerHTML = count
    }
})

resetBTn.addEventListener("click", () => {
    count = 0
    countLable.innerHTML = count
})




