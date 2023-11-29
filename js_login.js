
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting

    // Retrieve user input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulated SQL injection vulnerability (not a real SQL query)
    var sqlQuery = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";

    // Simulate response based on injected values
    if (username === password || password.includes("'")) {
        alert('Login successful! (Simulated SQL injection)');
        // Perform actions upon successful login (simulated)
    } else {
        alert('Invalid credentials');
    }
});
