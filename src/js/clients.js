let clickExit = function () {
    const btnExit = document.querySelector('.btn-exit')
    btnExit.addEventListener('click', function () {
        window.localStorage.clear();
    })
}
clickExit()