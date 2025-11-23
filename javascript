function verifierEmail() {
    let email = document.getElementById("emailInput").value;
    let messageDiv = document.getElementById("message");
    
    if (/^[a-zA-Z0-9]+@.+\..+$/.test(email)) {
        messageDiv.textContent = "Email valide ✓";
    } else {
        messageDiv.textContent = "Email invalide ✗";
    }
}
