//форма и его элементы

const signPageForm = document.forms.formSingUp;
const signInputEmail = signPageForm.NewInputEmail
const signInputPassword = signPageForm.newInputPassword
const signInputPasswordRepeat = signPageForm.newInputPasswordRepeat
const signBtn = signPageForm.button
const errorInput = document.querySelector('.fail')
const errorPassword = document.querySelector('.failSecond')
const errorRepeatPassword = document.querySelector('.failThree')
const registered = document.querySelector('.registered')



//валидация 

function isUserDataValid () {
    if (signPageForm.checkValidity()) {
        signBtn.disabled = false
    } else {
        signBtn.disabled = true
    }
}

function isInputFieldValid () {
    if (signInputEmail.checkValidity() == false) {
        errorInput.style.display = 'block'
        signBtn.disabled = true 
    } else {
        errorInput.style.display = 'none'
    }
}

function isPasswordFieldValid () {
    if (signInputPassword.checkValidity() == false) {
        errorPassword.style.display = 'block'
        signBtn.disabled = true
    } else {
        errorPassword.style.display = 'none'
    }
}

function isPasswordRepeatFieldValid () {
    if (signInputPasswordRepeat.checkValidity() == false) {
        errorRepeatPassword.style.display = 'block'
        signBtn.disabled = false
    } else {
        errorRepeatPassword.style.display = 'none'
    }
}

signPageForm.addEventListener('change',isUserDataValid)
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
signPageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (isUserEnter(signInputEmail) == false) {
        errorInput.innerHTML = "This user exists";
    } else  {
        if (isSignPassword(signInputEmail, signInputPassword) == true) {
            registered.innerHTML = 'Сompleted successfully!!!'
            registered.style.fontSize = '25px'
            registered.style.color = 'green'

        } else {
            registered.style.fontSize = '25px'
            registered.style.color = 'red'
            registered.innerHTML = 'ERROR'
        }
    }
})



