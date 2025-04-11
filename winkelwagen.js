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


const cartContainer = document.getElementById('cart-items');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const prodd = [
    {Naam: "Bkasht", detail: "yap", isrc: "products/blackwkast.svg", prijs: "5000"},
    {Naam: "Eiktaf", detail: "yap", isrc: "products/eiktafel.svg", prijs: "6500"},
    {Naam: "Supkruk", detail: "yap", isrc: "products/supkruk.svg", prijs: "599"},
    {Naam: "Lagkasht", detail: "yap", isrc: "products/lagkasht.svg", prijs: "5000"},
    {Naam: "Plankas", detail: "yap", isrc: "products/planklegkast.svg", prijs: "5000"},
    {Naam: "Btaf", detail: "yap", isrc: "products/btaf.svg", prijs: "5000"},
    {Naam: "Sustoel", detail: "yap", isrc: "products/supstoel.svg", prijs: "5000"},
    {Naam: "Komkruk", detail: "yap", isrc: "products/komkruk.svg", prijs: "5000"},
    {Naam: "Boekast", detail: "yap", isrc: "products/boekkast.svg", prijs: "5000"},
    {Naam: "Comfstoel", detail: "yap", isrc: "products/comfstoel.svg", prijs: "5000"},
];

function renderCart() {
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="text-gray-500">Je winkelwagen is leeg.</p>';
        return;
    }

    cart.forEach((item, index) => {
        // Zoek bijpassende afbeelding via naam
        const product = prodd.find(p => p.Naam === item.naam);
        const imgSrc = product ? product.isrc : '';

        const artikel = document.createElement('div');
        artikel.className = "flex items-center justify-between border-b pb-4";

        artikel.innerHTML = `
            <div>
                <p class="font-bold">${item.naam}</p>
                <img src="${imgSrc}" alt="${item.naam}" class="w-20 h-20 object-contain mt-2 rounded">
                <p>Prijs: €${item.prijs}</p>
            </div>
            <div class="flex items-center space-x-2">
                <input type="number" min="1" value="${item.aantal}" data-index="${index}" class="w-16 p-1 border rounded aantal-input">
                <button onclick="verwijderItem(${index})" class="text-red-600 hover:underline">Verwijder</button>
            </div>
        `;

        cartContainer.appendChild(artikel);
    });

    document.querySelectorAll('.aantal-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const i = e.target.dataset.index;
            cart[i].aantal = parseInt(e.target.value);
            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });
}

function verwijderItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function gaNaarBestellen() {
    window.location.href = "index_VIEW.php";
}

renderCart();

function verwijderItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function gaNaarBestellen() {
    if (cart.length === 0) {
        alert("Je winkelwagen is leeg. Voeg items toe voordat je verdergaat.");
    } else {
        window.location.href = "index_VIEW.php";
    }
}

renderCart();