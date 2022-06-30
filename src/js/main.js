const welcomeMessage = document.querySelector('.text')
const userAgentInfo = navigator.userAgent
const  currentUser = window.localStorage.setItem('user','email')
const currentUser2 = window.localStorage.getItem(loginUserEmail)
const currentUser3 = window.localStorage.getItem()
welcomeMessage.innerHTML = `Welcome ${currentUser}`
