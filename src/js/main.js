const welcomeText = document.querySelector('.text')
const device = navigator.userAgent
const user = localStorage.getItem('person')
const person = JSON.parse(user)
person[0].email = 'Dima'
welcomeText.innerHTML = `Hi, <b>${person[0].email}!</b> <c>You logged in from</c> ${device}`

let clickExit = function () {
    const btnExit = document.querySelector('.btn-exit')
    btnExit.addEventListener('click', function () {
        window.localStorage.clear();
    })
}
clickExit()
