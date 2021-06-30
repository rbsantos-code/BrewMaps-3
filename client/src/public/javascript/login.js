async function signupFormhandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value;

    const password = document.querySelector('#password-signup').value;

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(reponse);
        // check the reponse status
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

// login section
async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();

    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}


// event listeners
document.querySelector('.signup-form').addEventListener('submit', signupFormhandler);

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);