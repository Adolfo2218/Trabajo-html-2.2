document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Aquí puedes realizar la validación de los campos según tus necesidades
    if (username === "admin" && password === "password123") {
        alert("¡Inicio de sesión exitoso!");
        // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});
