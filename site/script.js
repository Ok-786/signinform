const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

var usernameBool = false;
var emailBool = false;
var passwordBool = false;
var password2Bool = false;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank!');
    } else {
        usernameBool = true;
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank!');
    } else {
        emailBool = true;
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank!');
    } else {
        passwordBool = true;
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    } else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Password does not match!');
    } else {
        password2Bool = true;
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    if(usernameBool === true && emailBool === true && passwordBool === true && password2Bool === true)
    {
        alert("Login successfull!!!");
    }
}