function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    if (name == "" || email == "" || subject == "" || message == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    return true;
}