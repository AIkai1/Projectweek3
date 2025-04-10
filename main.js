const menu = document.getElementById("menu");
menu.style.display = "none";
const showMenu = document.getElementById("burger").addEventListener("click", () => {
    if (menu.style.display === "none") {
        menu.style.display = "block";
        console.log(menu.style.display);
    } else if (menu.style.display === "block") {
        menu.style.display = "none";
        console.log(menu.style.display);
    }
})

const products = [
    document.getElementById("prod1"),
    document.getElementById("prod2"),
    document.getElementById("prod3"),
    document.getElementById("prod4"),
    document.getElementById("prod5"),
    document.getElementById("prod6"),
    document.getElementById("prod7"),
    document.getElementById("prod8"),
    document.getElementById("prod9"),
    document.getElementById("prod10")
]