function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var birthdate = document.getElementById("birthdate").value;

    if (username == "" || password == "" || confirmPassword == "" || email == "" || birthdate == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (password != confirmPassword) {
        alert("As senhas não correspondem. Por favor, tente novamente.");
        return false;
    }

    return true;
}