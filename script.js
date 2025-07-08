// Mudar classe para light e deixar o site na versão clara

function changeClass() {
    const html = document.documentElement
    html.classList.toggle("light")

    const imgProfile = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        imgProfile.setAttribute("src", "./assets/avatar-light.png")
        imgProfile.setAttribute(
            "alt",
            "maykbrito de oculos de sol e fundo azul"
        )
    } else {
        imgProfile.setAttribute("src", "./assets/avatar.png")
        imgProfile.setAttribute("alt", "maykbrito sorrindo com fundo amarelo")
    }
}
