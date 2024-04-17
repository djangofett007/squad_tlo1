// Imaginary API keys
const API_KEY = "IMAGINARY_API_KEY_12345678";
const SECRET_KEY = "IMAGINARY_SECRET_98765432";

// Imaginary user database (do not use real credentials like this)
const users = [
    {
        username: "john_doe",
        password: "imaginary_password_123"
    },
    {
        username: "jane_doe",
        password: "imaginary_password_456"
    }
];

function fetchData() {
    // Normally you would use the API key here to fetch data from a service
    console.log("Using API key:", API_KEY);

    // Here's a dummy fetch simulation
    setTimeout(() => {
        console.log("Data fetched: Hello World!");
    }, 1000);
}

function loginUser(username, password) {
    // DO NOT do authentication like this in real-world scenarios. 
    // This is just for demonstration purposes.
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        console.log("User logged in:", username);
    } else {
        console.log("Login failed for:", username);
    }
}

// Sample call
loginUser("john_doe", "imaginary_password_123");