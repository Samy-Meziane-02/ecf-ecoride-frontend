// Liste des trajets simulée
const trajets = [
    { id: 1, pseudo: "Jean75", photo: "images_ecoride/Jean.jpg", note: 4.5, places: 2, prix: 20, duree: 3, eco: true, date: "2025-03-01", heure: "08:00", vehicule: "Tesla Model 3", energie: "Électrique" },
    { id: 2, pseudo: "Marie92", photo: "images_ecoride/Marie.jpg", note: 5, places: 1, prix: 15, duree: 2, eco: false, date: "2025-03-02", heure: "10:00", vehicule: "Peugeot 208", energie: "Essence" },
    { id: 3, pseudo: "Alex91", photo: "images_ecoride/Alex.jpg", note: 3.8, places: 3, prix: 10, duree: 1.5, eco: true, date: "2025-03-03", heure: "12:00", vehicule: "Renault Zoé", energie: "Électrique" }
];

// Fonction pour afficher les trajets
function afficherTrajets(trajetsAffiches) {
    const container = document.getElementById("covoiturages-list");
    container.innerHTML = "";
    
    trajetsAffiches.forEach(trajet => {
        container.innerHTML += `
            <div class="trajet">
                <img src="${trajet.photo}" alt="Photo de ${trajet.pseudo}">
                <h3>${trajet.pseudo} (${trajet.note} ★)</h3>
                <p>Prix : ${trajet.prix} € | Places : ${trajet.places} | Durée : ${trajet.duree}h</p>
                <p><strong>Véhicule :</strong> ${trajet.vehicule} (${trajet.energie})</p>
                <a href="details.html?id=${trajet.id}">Détails</a>
            </div>
        `;
    });
}

// Fonction pour appliquer les filtres
function applyFilters() {
    let filteredTrajets = trajets;

    if (document.getElementById("filterEco").checked) {
        filteredTrajets = filteredTrajets.filter(t => t.eco);
    }

    let maxPrice = document.getElementById("filterPrice").value;
    if (maxPrice) {
        filteredTrajets = filteredTrajets.filter(t => t.prix <= maxPrice);
    }

    let maxDuration = document.getElementById("filterDuration").value;
    if (maxDuration) {
        filteredTrajets = filteredTrajets.filter(t => t.duree <= maxDuration);
    }

    let minRating = document.getElementById("filterRating").value;
    if (minRating > 0) {
        filteredTrajets = filteredTrajets.filter(t => t.note >= minRating);
    }

    afficherTrajets(filteredTrajets);
}

// Afficher tous les trajets au chargement
document.addEventListener("DOMContentLoaded", () => afficherTrajets(trajets));