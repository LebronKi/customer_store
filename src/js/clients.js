// the exit button from the application

let clickExit = function () {
    const btnExit = document.querySelector('.btn-exit')
    btnExit.addEventListener('click', function () {
        window.localStorage.clear();
    })
}
clickExit()

//getting data from a list by using the fetch method

const newPromise = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}
const url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json'

async function fetchMethod() {
    await newPromise(700)
    const data = await fetch(url)
    const dataNew = await data.json()
    console.log(dataNew)
    const body = document.querySelector('body')
    const valueName = document.querySelector('.table-info1')
    const valueCompany = document.querySelector('.table-info2')
    const valueEmail = document.querySelector('.table-info3')
    const valuePhone = document.querySelector('.table-info4')
    const valueBalance = document.querySelector('.table-info5')
    const valueRegistered = document.querySelector('.table-info6')
    console.log(body)
    valueName.append(dataNew[0].name)
    valueCompany.append(dataNew[0].company)
    valueEmail.append(dataNew[0].email)
    valuePhone.append(dataNew[0].phone)
    valueBalance.append(dataNew[0].balance)
    valueRegistered.append(dataNew[0].registered)
}
fetchMethod()

//through the DOM, I found a table and buttons for deleting values from tables

const modalBtn1 = document.querySelector('#myBtnTable1')
const modalBtn2 = document.querySelector('#myBtnTable2')
const modalBtn3 = document.querySelector('#myBtnTable3')
const modalBtn4 = document.querySelector('#myBtnTable4')
const modalBtn5 = document.querySelector('#myBtnTable5')
const modalBtn6 = document.querySelector('#myBtnTable6')

//table value fields

const valueName = document.querySelector('.table-info1')
const valueCompany = document.querySelector('.table-info2')
const valueEmail = document.querySelector('.table-info3')
const valuePhone = document.querySelector('.table-info4')
const valueBalance = document.querySelector('.table-info5')
const valueRegistered = document.querySelector('.table-info6')

//modal window, pop-up message

const modal = document.querySelector('.modal')
const btnConfirm = document.querySelector('#btnConfirm')
const btnCancel = document.querySelector('#btnCansel')
const message = document.querySelector('.message')



modalBtn1.addEventListener('click',function (event){
    modal.style.display = 'block'
})
btnConfirm.addEventListener('click',function (event){
    valueName.innerHTML = ''
    modal.style.display = 'none'
    setTimeout(()=>{
        message.style.display = 'block'
    },400)
})
btnCancel.addEventListener('click',function (event){
    modal.style.display = 'none'
})

//modal window second

const modal2 = document.querySelector('.modal2')
const btnConfirm2 = document.querySelector('#btnConfirm2')
const btnCancel2 = document.querySelector('#btnCansel2')
modalBtn2.addEventListener('click',function (event){
    modal2.style.display = 'block'
})
btnConfirm2.addEventListener('click',function (event){
    valueCompany.innerHTML = ' '
    modal2.style.display = 'none'
    setTimeout(()=>{
        message.style.display = 'block'
    },300)
})
btnCancel2.addEventListener('click',function (event){
    modal2.style.display = 'none'
})

//modal window third

const modal3 = document.querySelector('.modal3')
const btnConfirm3 = document.querySelector('#btnConfirm3')
const btnCancel3 = document.querySelector('#btnCansel3')
modalBtn3.addEventListener('click',function (event){
    modal3.style.display = 'block'
})
btnConfirm3.addEventListener('click',function (event){
    valueEmail.innerHTML = ' '
    modal3.style.display = 'none'
    setTimeout(()=>{
        message.style.display = 'block'
    },300)
})
btnCancel3.addEventListener('click',function (event){
    modal3.style.display = 'none'
})

// modal window four

const modal4 = document.querySelector('.modal4')
const btnConfirm4 = document.querySelector('#btnConfirm4')
const btnCancel4 = document.querySelector('#btnCansel4')
modalBtn4.addEventListener('click',function (event){
    modal4.style.display = 'block'
})
btnConfirm4.addEventListener('click',function (event){
    valuePhone.innerHTML = ' '
    modal4.style.display = 'none'
    setTimeout(()=>{
        message.style.display = 'block'
    },300)
})
btnCancel4.addEventListener('click',function (event){
    modal4.style.display = 'none'
})

//modal window five

const modal5 = document.querySelector('.modal5')
const btnConfirm5 = document.querySelector('#btnConfirm5')
const btnCancel5 = document.querySelector('#btnCansel5')
modalBtn5.addEventListener('click',function (event){
    modal5.style.display = 'block'
})
btnConfirm5.addEventListener('click',function (event){
    valueBalance.innerHTML = ' '
    modal5.style.display = 'none'
    setTimeout(()=>{
        message.style.display = 'block'
    },300)
})
btnCancel5.addEventListener('click',function (event){
    modal5.style.display = 'none'
})

//modal window six

const modal6 = document.querySelector('.modal6')
const btnConfirm6 = document.querySelector('#btnConfirm6')
const btnCancel6 = document.querySelector('#btnCansel6')
modalBtn6.addEventListener('click',function (event){
    modal6.style.display = 'block'
})
btnConfirm6.addEventListener('click',function (event){
    valueRegistered.innerHTML = ' '
    modal6.style.display = 'none'
    setTimeout(()=>{
        message.style.display = 'block'
    },300)
})
btnCancel6.addEventListener('click',function (event){
    modal6.style.display = 'none'
})

//button to close the pop-up window

const btnCloseModalMessage = document.querySelector('.close')
btnCloseModalMessage.addEventListener('click',function (event){
    message.style.display = 'none'
})

//the button that takes us back to the top of the page

const upBtn = document.querySelector('.up')
upBtn.addEventListener('click',function (event) {
    event.preventDefault()
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})