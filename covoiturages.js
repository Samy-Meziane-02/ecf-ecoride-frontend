document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let depart = document.getElementById("depart").value;
    let arrivee = document.getElementById("arrivee").value;
    let date = document.getElementById("date").value;
    let resultsContainer = document.getElementById("results");
    let noResults = document.getElementById("noResults");

    // Exemple de trajets disponibles (à remplacer par une requête à la base de données)
    let trajets = [
        {
            pseudo: "Alex34",
            photo: "https://via.placeholder.com/50",
            note: "⭐ 4.5",
            places: 2,
            prix: "10€",
            date: "2025-02-20",
            heureDepart: "08:30",
            heureArrivee: "10:00",
            eco: true
        },
        {
            pseudo: "MarieEco",
            photo: "https://via.placeholder.com/50",
            note: "⭐ 5.0",
            places: 1,
            prix: "12€",
            date: "2025-02-20",
            heureDepart: "09:00",
            heureArrivee: "11:30",
            eco: true
        }
    ];

    // Filtrer les trajets en fonction de la recherche
    let resultatsFiltres = trajets.filter(trajet => trajet.date === date);

    resultsContainer.innerHTML = "";
    if (resultatsFiltres.length === 0) {
        noResults.innerText = "Aucun covoiturage disponible pour cette date.";
        return;
    }

    noResults.innerText = "";
    resultatsFiltres.forEach(trajet => {
        let div = document.createElement("div");
        div.classList.add("result-item");
        div.innerHTML = `
            <img src="${trajet.photo}" alt="Photo de ${trajet.pseudo}">
            <p><strong>${trajet.pseudo}</strong> ${trajet.note}</p>
            <p>Places restantes : ${trajet.places}</p>
            <p>Prix : ${trajet.prix}</p>
            <p>Départ : ${trajet.heureDepart} - Arrivée : ${trajet.heureArrivee}</p>
            <p>${trajet.eco ? "✅ Voyage écologique" : "❌ Non écologique"}</p>
            <button onclick="alert('Détails à venir')">Détails</button>
        `;
        resultsContainer.appendChild(div);
    });
});