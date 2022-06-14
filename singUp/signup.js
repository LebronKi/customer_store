//форма и его элементы

const signPage = document.forms.formSingUp;
const signInputEmail = signPage.NewInputEmail
const signInputPassword = signPage.newInputPassword
const signInputPasswordRepeat = signPage.newInputPasswordRepeat
const signBtn = signPage.button
const mistakeInput = document.querySelector('.fail')
const mistakePassword = document.querySelector('.failSecond')
const mistakeRepeatPassword = document.querySelector('.failThree')
const regist = document.querySelector('.registered')



//валидация 

function isUserDataValid () {
    if (signPage.checkValidity() == true) {
        signBtn.disabled = false
    } else {
        signBtn.disabled = true
    }
}

function isInputFieldValid () {
    if (signInputEmail.checkValidity() == false) {
        mistakeInput.style.display = 'block'
        signBtn.disabled = true 
    } else {
        mistakeInput.style.display = 'none'
    }
}

function isPasswordFieldValid () {
    if (signInputPassword.checkValidity() == false) {
        mistakePassword.style.display = 'block'
        signBtn.disabled = true
    } else {
        mistakePassword.style.display = 'none'
    }
}

function isPasswordRepeatFieldValid () {
    if (signInputPasswordRepeat.checkValidity() == false) {
        mistakeRepeatPassword.style.display = 'block'
        signBtn.disabled = true
    } else {
        mistakeRepeatPassword.style.display = 'none'
    }
}

signPage.addEventListener('change',isUserDataValid)
signInputEmail.addEventListener('change', isInputFieldValid)
signInputPassword.addEventListener('change', isPasswordFieldValid)
signInputPasswordRepeat.addEventListener('change', isPasswordRepeatFieldValid)


window.appUsers = [
    {
        email: 'namedima@yandex.ru',
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

function isSignPassword (email, password) {
    if (isUserEnter(email) === true) {
        let userPassword = password.value;
        return Boolean(window.appUsers.find(user => user.password === userPassword));
    }
}
function isSignPasswordRepeat (email, password) {
    if (isUserEnter(email) === true) {
        let userPassword = password.value;
        return Boolean(window.appUsers.find(user => user.password === userPassword));
    }
}
signPage.addEventListener('submit', function (event) {
    event.preventDefault();
    if (isUserEnter(signInputEmail) == false) {
        mistakeInput.innerHTML = "This user exists";
    } else  {
        if (isSignPassword(signInputEmail, signInputPassword) == true) {
            regist.innerHTML = 'Сompleted successfully!!!'
            regist.style.fontSize = '25px'
            regist.style.color = 'green'

        } else {
            regist.style.fontSize = '25px'
            regist.style.color = 'red'
            regist.innerHTML = 'ERROR'
        }
    }
})