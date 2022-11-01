
function mostrar() {
    let poesia1 = document.getElementById("soneto1")
    let poesia2 = document.getElementById("soneto2")
    let poesia3 = document.getElementById("soneto3")

    let checkPoema = document.getElementsByName("poema")
    for (let i = 0; i < checkPoema.length; i++) {
        if (checkPoema[0].checked == true) {
            poesia1.hidden = false
            poesia2.hidden = true
            poesia3.hidden = true
        }
        else if (checkPoema[1].checked == true) {
            poesia1.hidden = true
            poesia2.hidden = false
            poesia3.hidden = true
        }
        else if (checkPoema[2].checked == true) {
            poesia1.hidden = true
            poesia2.hidden = true
            poesia3.hidden = false
        }
    }
}

