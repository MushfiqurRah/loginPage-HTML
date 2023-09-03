document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginOutcome = document.getElementById("login-outcome");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Load the user data from the JSON file (you can use an HTTP request in a real application)
        fetch("users.json")
            .then((response) => response.json())
            .then((data) => {
                const users = data.users;
                const user = users.find((u) => u.username === username && u.password === password);

                if (user) {
                    loginOutcome.textContent = "Login successful!";
                    loginOutcome.style.color = "green";
                    // You can redirect the user to another page here
                } else {
                    loginOutcome.textContent = "Invalid username or password. Please try again.";
                    loginOutcome.style.color = "red";
                    // You can clear the input fields here
                }
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
                loginOutcome.textContent = "An error occurred. Please try again later.";
                loginOutcome.style.color = "red";
            });
    });
});