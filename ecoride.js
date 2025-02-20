document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let depart = document.getElementById("depart").value;
    let arrivee = document.getElementById("arrivee").value;
    let date = document.getElementById("date").value;

    let resultatsDiv = document.getElementById("resultats");
    resultatsDiv.innerHTML = "<p>Recherche de covoiturages en cours...</p>";

    // Simulation de résultats
    setTimeout(() => {
        resultatsDiv.innerHTML = `
            <h3>Résultats pour ${depart} ➝ ${arrivee} (${date})</h3>
            <div class="covoiturage">
                <p><strong>Chauffeur :</strong> Alex (⭐⭐⭐⭐⭐)</p>
                <p><strong>Places restantes :</strong> 2</p>
                <p><strong>Prix :</strong> 10€</p>
                <p><strong>Départ :</strong> 08:00</p>
                <p><strong>Arrivée :</strong> 10:30</p>
                <p><strong>Écologique :</strong> ✅ (Voiture électrique)</p>
                <button>Voir Détails</button>
            </div>
        `;
    }, 2000);
});