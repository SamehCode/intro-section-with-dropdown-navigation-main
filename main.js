// nav links & drop menu logic

let ulLinks = document.querySelector('header nav ul.links');
let allLinks = document.querySelectorAll('header nav ul.links > li');
let dropMenu = document.querySelectorAll('header nav ul.drop-links');
let toggleBtn = document.querySelector('header .toggle');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('header .close')
let headForm = document.querySelector('header form')

console.log(ulLinks)

allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        allLinks.forEach(link => link.classList.remove('clicked'));
        e.currentTarget.classList.add('clicked');
        dropMenu.forEach(menu => {
            menu.classList.remove('clicked');
            dropMenu[parseInt(link.dataset.li)].classList.add('clicked');
        })
    })
})

toggleBtn.addEventListener('click', () => {
    ulLinks.classList.add('col')
    overlay.classList.add('clicked')
    closeBtn.classList.add('clicked')
    headForm.classList.add('show')
})

closeBtn.onclick = function () {
    ulLinks.classList.remove('col')
    overlay.classList.remove('clicked')
    closeBtn.classList.remove('clicked')
    headForm.classList.remove('show')
}

