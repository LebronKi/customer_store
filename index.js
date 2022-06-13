const pageLogin = document.forms.login;
const loginUserEmail = pageLogin.userEmail
const loginUserPassword = pageLogin.userPassword
const loginBtn  = pageLogin.authorizationBtn
const mistakeInput = document.querySelector('.errorInput')
const mistakePassword = document.querySelector('.errorPassword')
let loginSms = document.querySelector('.log-in')




function isUserDataValid () {
    if (pageLogin.checkValidity() == true) {
        loginBtn.disabled = false
    } else {
        loginBtn.disabled = true
    }
}


function isInputFieldValid () {
    if (loginUserEmail.checkValidity() == false || loginUserEmail.value.length < 1 ) {
        mistakeInput.style.display = 'block'
        loginBtn.disabled = true
    } else {
        mistakeInput.style.display = 'none'
        loginBtn.disabled = false
    }
}
function isPasswordFieldValid () {
    if (loginUserPassword.checkValidity() == false || loginUserPassword.value.length < 1 ) {
        mistakePassword.style.display = 'block'
        loginBtn.disabled = true
    } else {
        mistakePassword.style.display = 'none'
        loginBtn.disabled = false
    }
}

loginUserEmail.addEventListener('change', isInputFieldValid)
loginUserPassword.addEventListener('change', isPasswordFieldValid)

window.newUser = [
    {
        email: 'dima@yandex.ru',
        password: '1234567'
    }
];

function isUserEnter (email) {
    let userEmail = email.value;
    if (Boolean(window.newUser.find(user => user.email === userEmail))) {
        return true
    } else {
        return false
    }
}

let loginAccount = function (email, password) {
    if (isUserEnter(email) === true) {
        let userPassword = password.value;
        return Boolean(window.newUser.find(user => user.password === userPassword));
    }
}

pageLogin.addEventListener('submit', function (event) {
    event.preventDefault();
    if (isUserEnter(loginUserEmail) == false) {
        mistakeInput.innerHTML = "This user exists";
    } else  {
        if (loginAccount(loginUserEmail, loginUserPassword) == true) {
            loginSms.innerHTML = 'Сompleted successfully!!!'
            loginSms.style.fontSize = '25px'
            loginSms.style.color = 'green'
        } else {
            loginSms.style.color = 'red'
            loginSms.innerHTML = 'ERROR'
        }
    }
})
