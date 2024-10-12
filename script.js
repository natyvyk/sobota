document.body.innerHTML += "Měsíční výplata" + " = "
document.body.innerHTML += 7 * 320 * 21
document.body.innerHTML += "<br>" + " Daň = "
document.body.innerHTML += Math.floor (7 * 320 * 21 * (1-0.6) * 0.15)