
function submitForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessageElement = document.getElementById("error-message");
    // Очистка предыдущих сообщений об ошибках
    errorMessageElement.innerHTML = "";

    if (!email || !password) {
        errorMessageElement.innerHTML = "Please enter both email and password.";
        return;
    }
    if (password.length <= 6 || !/[0-9]/.test(password) || !/^[a-zA-Z]+$/.test(password)) {
        errorMessageElement.innerHTML = "Password must be at least 6 characters long, contain at least one digit, and be in English.";
        return;
    }
    const requestData = {
        email: email,
        password: password
    };

    fetch('https://your-server-endpoint.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
