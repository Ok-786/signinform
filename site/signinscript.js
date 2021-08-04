const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

var usernameBool = false;
var passwordBool = false;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setErrorFor(username);
    } else {
        usernameBool = true;
        setSuccessFor(username);
    }

    if(passwordValue === '') {
        setErrorFor(password);
    } else {
        passwordBool = true;
        setSuccessFor(password);
    }

}

function setErrorFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-controli error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-controli success';
    if(usernameBool === true && passwordBool === true )
    {
        window.location = "cv.html"
    }
}