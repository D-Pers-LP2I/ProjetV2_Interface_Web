// Ajouter une communication avec le serveur Flask
fetch('/validate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, email })
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        messageElement.textContent = "Connexion réussie.";
    } else {
        messageElement.textContent = "Erreur : " + data.message;
    }
})
.catch(error => {
    messageElement.textContent = "Erreur de connexion au serveur.";
});
