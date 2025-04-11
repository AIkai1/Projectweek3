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

const prodd = [
    {Naam: "Bkasht", detail: "yap", isrc: "products/blackwkast.svg", prijs: "5000"},
    {Naam: "Eiktaf", detail: "yap", isrc: "products/eiktafel.svg", prijs: "6500"},
    {Naam: "Supkruk", detail: "yap", isrc: "products/supkruk.svg", prijs: "5234"},
    {Naam: "Lagkasht", detail: "yap", isrc: "products/lagkasht.svg", prijs: "423"},
    {Naam: "Plankas", detail: "yap", isrc: "products/planklegkast.svg", prijs: "299"},
    {Naam: "Btaf", detail: "yap", isrc: "products/btaf.svg", prijs: "502"},
    {Naam: "Sustoel", detail: "yap", isrc: "products/supstoel.svg", prijs: "2340"},
    {Naam: "Komkruk", detail: "yap", isrc: "products/komkruk.svg", prijs: "3450"},
    {Naam: "Boekast", detail: "yap", isrc: "products/boekkast.svg", prijs: "548"},
    {Naam: "Comfstoel", detail: "yap", isrc: "products/comfstoel.svg", prijs: "390"},
]



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

const det  = document.getElementById("detail");

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", () => {
        console.log(products[i].id)
        det.style.display = "block";
        document.getElementById("bigimg").src = prodd[i].isrc
        document.getElementById("naam").textContent = `${prodd[i].Naam}`
        document.getElementById("prijs").textContent = `€${prodd[i].prijs}`
    })
}

document.querySelector("button").addEventListener("click", () => {
    const naam = document.getElementById("naam").textContent;
    const prijs = document.getElementById("prijs").textContent.replace("€", "");

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const bestaand = cart.find(item => item.naam === naam);
    if (bestaand) {
        bestaand.aantal += 1;
    } else {
        const img = document.getElementById("bigimg").src;
        cart.push({ naam, prijs, aantal: 1, img });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Artikel toegevoegd aan winkelwagen!");
});