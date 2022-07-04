// Our form and elements

const loginPageForm = document.forms.login
const loginUserEmail = loginPageForm.userEmail
const loginUserPassword = loginPageForm.userPassword
const loginBtn  = loginPageForm.authorizationBtn
const errorInput = document.querySelector('.error-input')
const errorPassword = document.querySelector('.error-password')
let loginStateNotification = document.querySelector('.log-in')



//validation

function handleUserDataValid () {
    if (loginPageForm.checkValidity()) {
        loginBtn.disabled = false
    } else {
        loginBtn.disabled = true
    }
}


function handleInputFieldValid () {
    if (loginUserEmail.checkValidity()) {
        errorInput.style.display = 'none'
        loginBtn.disabled = true
    } else {
        errorInput.style.display = 'block'
    }
}
function handlePasswordFieldValid () {
    if (loginUserPassword.checkValidity()) {
        errorPassword.style.display = 'none'
        loginBtn.disabled = true
    } else{
       errorPassword.style.display = 'block'
    }
}
loginPageForm.addEventListener('change', handleUserDataValid)
loginUserEmail.addEventListener('change', handleInputFieldValid)
loginUserPassword.addEventListener('change', handlePasswordFieldValid)




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
    }
}

let loginAccount = function (email, password) {
    if (isUserEnter(email) === true) {
        let userPassword = password.value;
        return Boolean(window.appUsers.find(user => user.password === userPassword));
    }
}

loginPageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (isUserEnter(loginUserEmail) === false) {
        errorInput.innerHTML = "This user exists";
    } else  {
        if (loginAccount(loginUserEmail, loginUserPassword) === true) {

            loginStateNotification.innerHTML = 'Login completed successfully!'
            loginStateNotification.style.fontSize = '25px'
            loginStateNotification.style.color = 'green'
            localStorage.setItem('sign-in','enter')
            completed()
        } else {
            loginStateNotification.style.color = 'red'
            loginStateNotification.innerHTML = 'Error,the form is filled out incorrectly '
        }
    }
})

function completed (){
    setTimeout(()=>{
        window.location.replace('./src/html/main.html');
        localStorage.setItem('person',JSON.stringify(appUsers))
    },1000)
}




















