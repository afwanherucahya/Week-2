const    btnRegistration = document.getElementById("btn-registration");

btnRegistration.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const fullname = document.getElementById("fullname").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validate input is not empty
    if (!email || !fullname || !password || !confirmPassword ) {
        alert("All Field are Required!");
        return;
    }

    if (password != confirmPassword) {
        alert("Password and Confirm Password must be same!");
        return;
    }

    window.location.href = "login.html";
});

