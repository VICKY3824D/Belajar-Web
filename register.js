document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        errorMessage.textContent = "Harap isi semua field!";
    } else {
        // Di sini Anda dapat menambahkan kode untuk menyimpan data atau mengirimnya ke server.
        alert("Registrasi berhasil!");
    }
});
