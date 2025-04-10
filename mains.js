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

document.getElementById("products").style.display = "none";
document.getElementById("prod").style.display = "none";

