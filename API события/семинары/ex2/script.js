const modalWin = document.querySelector(".modalWin")
const btn = document.querySelector(".btn")
btn.addEventListener('click', () => {

    modalWin.classList.add('is-open');
})

modalWin.addEventListener('click', () => {
    modalWin.classList.remove('is-open');
})