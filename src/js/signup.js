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


function isUserDataValid () {
    if (signPageForm.checkValidity()) {
        signBtn.disabled = false
    } else {
        signBtn.disabled = true
    }
}

function isInputFieldValid () {
    if (signInputEmail.checkValidity() === false) {
        errorInput.style.display = 'block'
        signBtn.disabled = true
    } else {
        errorInput.style.display = 'none'
    }
}

function isPasswordFieldValid () {
    if (signInputPassword.checkValidity() === false) {
        errorPassword.style.display = 'block'
        signBtn.disabled = true
    } else {
        errorPassword.style.display = 'none'
    }
}

function isPasswordRepeatFieldValid () {
    if (signInputPasswordRepeat.checkValidity() === false) {
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

window.appUsers = [ ]

function isUserEnter (email) {
    let userEmail = email.value;
    if (Boolean(window.appUsers.find(user => user.email === userEmail))) {
        return true
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
    let newUserEmailValue = signInputEmail.value
    let newUserPasswordValue = signInputPassword.value
    let signInputPasswordRepeatValue = signInputPasswordRepeat.value

    if (isUserEnter(signInputEmail) === false) {
        errorInput.innerHTML = "This user exists";
    } else  {
        if (signInputPasswordRepeatValue === newUserPasswordValue) {
            registered.innerHTML = 'Successfully Sign-Up!!!'
            registered.style.fontSize = '25px'
            registered.style.color = 'green'
            completed()
            let appUsersNew = JSON.parse(localStorage.getItem('users'))
            appUsersNew.push(
                {
                    email: signInputEmail.value,
                    password : signInputPassword.value
                })

            localStorage.setItem('newUserSignUp',JSON.stringify(appUsersNew))
        } else {
            registered.style.fontSize = '25px'
            registered.style.color = 'red'
            registered.innerHTML = 'ERROR'
        }
    }
})

let appUsersNew = JSON.parse(localStorage.getItem('users'))
function completed (){
    setTimeout(()=>{
        window.location.replace('./main.html');
        localStorage.setItem('newUserSignUp',JSON.stringify(appUsersNew))
        },1000)
}

