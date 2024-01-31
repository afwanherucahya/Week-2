const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

   //Validate Email and Password//
   if (!email || !password) {
    alert("Email and Password are required");
    return;
   }

   // Validate Input //
   if (email === "john@gmail.com" && password === "123456") {
        // Redirect to Home //
        window.location.href = "index.html";
   } else {
    alert("Email & Password are incorrect");
   }
});