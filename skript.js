document.addEventListener('DOMContentLoaded', function() {
    fetch('https://zelda.fanapis.com/api/games?limit=20')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const nahoda = document.getElementById('randomizer');

        nahoda.addEventListener('click', function() {
            let nahodne_cislo = Math.floor(Math.random() * data.data.length);
            console.log(nahodne_cislo);
            const nahodny_nazev = data.data[nahodne_cislo].name;
            const nahodny_popis = data.data[nahodne_cislo].description;
            document.getElementById('title').innerHTML = nahodny_nazev;
            document.getElementById('description').innerHTML = nahodny_popis;
        });
    });
});