document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let messageErreur = document.getElementById("messageErreur");

    // Simulation d'un utilisateur existant
    const utilisateur = {
        email: "test@ecoride.com",
        password: "123456"
    };

    if (email === utilisateur.email && password === utilisateur.password) {
        messageErreur.innerText = "";
        alert("Connexion réussie !");
        window.location.href = "covoiturages.html"; // Redirige vers la page des covoiturages
    } else {
        messageErreur.innerText = "Email ou mot de passe incorrect.";
    }
});