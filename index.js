//наша форма и его элементы

const pageLogin = document.forms.login;
const loginUserEmail = pageLogin.userEmail
const loginUserPassword = pageLogin.userPassword
const loginBtn  = pageLogin.authorizationBtn
const mistakeInput = document.querySelector('.errorInput')
const mistakePassword = document.querySelector('.errorPassword')
let loginSms = document.querySelector('.log-in')



//валидация

function isUserDataValid () {
    if (pageLogin.checkValidity() == true) {
        loginBtn.disabled = false
    } else {
        loginBtn.disabled = true
    }
}


function isInputFieldValid () {
    if (loginUserEmail.checkValidity() == false) {
        mistakeInput.style.display = 'block'
        loginBtn.disabled = true
    } else {
        mistakeInput.style.display = 'none'
    }
}
function isPasswordFieldValid () {
    if (loginUserPassword.checkValidity() == false) {
        mistakePassword.style.display = 'block'
        loginBtn.disabled = true
    } else {
        mistakePassword.style.display = 'none'
    }
}
pageLogin.addEventListener('change', isUserDataValid)
loginUserEmail.addEventListener('change', isInputFieldValid)
loginUserPassword.addEventListener('change', isPasswordFieldValid)




window.appUsers = [
    {
        email: 'dima@yandex.ru',
        password: '1234567',
    }
];

function isUserEnter (email) {
    let userEmail = email.value;
    if (Boolean(window.appUsers.find(user => user.email === userEmail))) {
        return true
    } else {
        return false
    }
}

let loginAccount = function (email, password) {
    if (isUserEnter(email) === true) {
        let userPassword = password.value;
        return Boolean(window.appUsers.find(user => user.password === userPassword));
    }
}

pageLogin.addEventListener('submit', function (event) {
    event.preventDefault();
    if (isUserEnter(loginUserEmail) == false) {
        mistakeInput.innerHTML = "This user exists";
    } else  {
        if (loginAccount(loginUserEmail, loginUserPassword) == true) {
            loginSms.innerHTML = 'Сompleted!'
            loginSms.style.fontSize = '25px'
            loginSms.style.color = 'green'
        } else {
            loginSms.style.color = 'red'
            loginSms.innerHTML = 'ERROR'
        }
    }
})
