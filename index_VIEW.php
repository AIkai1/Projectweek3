<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Bestelling Afronden</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#333333] p-6">
    <div class="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Bestelling Overzicht</h2>

        <div id="bestelling-overzicht" class="space-y-4"></div>
        <h3 class="text-xl font-semibold mt-6 mb-2">Jouw Gegevens</h3>
        <form action="verwerk_bestelling.php" method="post" onsubmit="return voegCartToeAanForm()">
            <input type="hidden" name="winkelwagen_data" id="winkelwagen_data">

            <label class="block mb-2">Naam</label>
            <input type="text" name="naam" required class="w-full p-2 border rounded mb-4">

            <label class="block mb-2">Achternaam</label>
            <input type="text" name="achternaam" required class="w-full p-2 border rounded mb-4">

            <label class="block mb-2">Adres(Straat en huisnummer)</label>
            <input type="text" name="adres" required class="w-full p-2 border rounded mb-4">

            <label class="block mb-2">Postcode</label>
            <input type="text" name="postcode" pattern="^[1-9][0-9]{3}\s?[A-Za-z]{2}$" required class="w-full p-2 border rounded mb-4">

            <label class="block mb-2">E-mail</label>
            <input type="email" name="email" required class="w-full p-2 border rounded mb-4">

            <button type="submit" class="bg-[#777777] text-white px-4 py-2 rounded hover:bg-[#997570]">Bestelling Plaatsen</button>
        </form>
    </div>

    <script>
        const overzichtContainer = document.getElementById("bestelling-overzicht");
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        function toonOverzicht() {
            if (cart.length === 0) {
                overzichtContainer.innerHTML = "<p class='text-gray-500'>Je winkelwagen is leeg.</p>";
                return;
            }

            let totaal = 0;
            cart.forEach(item => {
                totaal += item.prijs * item.aantal;
                overzichtContainer.innerHTML += `
                    <div class="flex justify-between border-b pb-2">
                        <div>
                            <p class="font-bold">${item.naam}</p>
                            <p>Aantal: ${item.aantal}</p>
                        </div>
                        <p>€${(item.prijs * item.aantal).toFixed(2)}</p>
                    </div>
                `;
            });

            overzichtContainer.innerHTML += `
                <div class="flex justify-between mt-4 font-bold text-lg">
                    <p>Totaal</p>
                    <p>€${totaal.toFixed(2)}</p>
                </div>
            `;
        }

        function voegCartToeAanForm() {
            const hiddenInput = document.getElementById("winkelwagen_data");
            hiddenInput.value = JSON.stringify(cart);
            return true;
        }

        toonOverzicht();
    </script>
</body>
</html>