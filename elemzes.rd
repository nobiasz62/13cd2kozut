A működés lényege:
A program elindít egy szervert, ami figyeli a bejövő kéréseket.
Ha valaki a böngészőből vagy egy alkalmazásból kérést küld, a szerver megnézi, hogy van-e hozzá tartozó útvonal.
Az útvonalhoz tartozó függvény az app.get határozza meg, hogy mit válaszoljon a szerver.
A / útvonalnál egyszerűen visszaírja, hogy „Fut a backend!”, ezzel jelezve, hogy működik.
A /regiok útvonalnál a szerver kapcsolódik a MySQL adatbázishoz, lefuttat egy lekérdezést, és visszaküldi az eredményt JSON formátumban. Ez olyan, mintha a szerver egy listát adna vissza az adatbázisban tárolt régiókról.