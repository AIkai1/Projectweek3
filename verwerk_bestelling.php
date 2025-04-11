<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $naam = htmlspecialchars($_POST["naam"]);
    $achternaam = htmlspecialchars($_POST["achternaam"]);
    $adres = htmlspecialchars($_POST["adres"]);
    $email = htmlspecialchars($_POST["email"]);
    $winkelwagen_data = json_decode($_POST["winkelwagen_data"], true);

    print 
    "<body>
     <h2>Bedankt voor je bestelling, $naam $achternaam!</h2>
    <p>We sturen de meubels naar: $adres</p>
     <p>Bevestiging is gemaild naar: $email</p>
      <h3>Overzicht:</h3>
     <ul>
    </body>";

    $totaal = 0;
    foreach ($winkelwagen_data as $item) {
        $subtotaal = $item['prijs'] * $item['aantal'];
        print "<li>{$item['naam']} x {$item['aantal']} = €" . number_format($subtotaal, 2) . "</li>";
        $totaal += $subtotaal;
    }

    print "</ul>";
    print "<p><strong>Totaal: €" . number_format($totaal, 2) . "</strong></p>";
} else {
    print "Ongeldige aanvraag.";
}
?>