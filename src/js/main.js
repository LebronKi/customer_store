const welcomeText = document.querySelector('.text')
const body = document.querySelector('body')
const device = navigator.userAgent
const user = localStorage.getItem('person')
const person = JSON.parse(user)
welcomeText.innerHTML = `Welcome, <b>${person[0].email}!</b><br/> <c>You logged in from</c> ${device}`

let clickExit = function () {
    const btnExit = document.querySelector('.btn-exit')
    btnExit.addEventListener('click', function () {
        window.localStorage.clear();
    })
}
clickExit()