// Simuler un utilisateur connecté
const utilisateurConnecte = true;  // Passe à false pour voir le comportement sans connexion

// Liste des trajets simulée
const trajets = [
    { id: 1, pseudo: "Jean75", photo: "images_ecoride/Jean.jpg", note: 4.5, places: 2, prix: 20, duree: 3, eco: true, date: "2025-03-01", heure: "08:00", vehicule: "Tesla Model 3", energie: "Électrique", avis: ["Super trajet !", "Conducteur ponctuel"], preferences: "Pas d'animaux, musique autorisée" }
];

// Récupérer l’ID du trajet dans l’URL
function getTrajetIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

// Afficher les détails du trajet
function afficherDetails() {
    const trajetId = getTrajetIdFromURL();
    const trajet = trajets.find(t => t.id == trajetId);

    if (!trajet) {
        document.getElementById("details-container").innerHTML = "<p>Trajet non trouvé.</p>";
        return;
    }

    document.getElementById("details-container").innerHTML = `
        <div class="trajet-details">
            <img src="${trajet.photo}" alt="Photo de ${trajet.pseudo}">
            <h2>${trajet.pseudo} (${trajet.note} ★)</h2>
            <p><strong>Véhicule :</strong> ${trajet.vehicule} (${trajet.energie})</p>
            <p><strong>Prix :</strong> ${trajet.prix} €</p>
            <p><strong>Places restantes :</strong> <span id="places-restantes">${trajet.places}</span></p>
            <p><strong>Départ :</strong> ${trajet.date} à ${trajet.heure}</p>
        </div>
    `;

    // Afficher le bouton de réservation si l'utilisateur est connecté et s'il reste des places
    const reserverBtn = document.getElementById("reserver-btn");
    if (utilisateurConnecte && trajet.places > 0) {
        reserverBtn.style.display = "block";
        reserverBtn.addEventListener("click", () => reserverPlace(trajet));
    }
}

// Fonction de réservation
function reserverPlace(trajet) {
    if (trajet.places > 0) {
        trajet.places -= 1; // Réduire le nombre de places
        document.getElementById("places-restantes").textContent = trajet.places;
        document.getElementById("confirmation-msg").textContent = "Réservation confirmée ✅";
        
        // Masquer le bouton si plus de places
        if (trajet.places === 0) {
            document.getElementById("reserver-btn").style.display = "none";
        }
    }
}

// Charger les détails au démarrage
document.addEventListener("DOMContentLoaded", afficherDetails);