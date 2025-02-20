document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let role = document.getElementById("role").value;
    let messageErreur = document.getElementById("messageErreur");

    // Vérification des champs
    if (password !== confirmPassword) {
        messageErreur.innerText = "Les mots de passe ne correspondent pas.";
        return;
    }

    if (password.length < 6) {
        messageErreur.innerText = "Le mot de passe doit contenir au moins 6 caractères.";
        return;
    }

    // Simule l'inscription (à remplacer par un appel à une API)
    let utilisateur = {
        username: username,
        email: email,
        password: password,
        role: role
    };

    console.log("Utilisateur inscrit :", utilisateur);
    alert("Inscription réussie !");
    window.location.href = "connexion.html"; // Redirige vers la page de connexion
});