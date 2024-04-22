useStrictMode: true
// -------------------------------------------header--------------------------------------
const header = document.querySelector('.header')
const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {        ``
    header.classList.toggle('mobile-header')
    document.body.classList.toggle('no-scroll')
});


// ----------------------------------popup--------------------------------
const popup = document.querySelector('.popup')
const popupShowBtns = document.querySelectorAll('.show-popup')
const closeFormBtn = document.querySelector('.close-form')

popupShowBtns.forEach(item => {
    item.addEventListener('click', () => {
        popup.classList.add('show-popup')
        document.body.classList.add('no-scroll')
    })
})

closeFormBtn.addEventListener('click', () => {
    popup.classList.remove('show-popup')
    document.body.classList.remove('no-scroll')
})

document.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show-popup')
        document.body.classList.remove('no-scroll')
    }
});

// -------------------------------page-styles---------------------------------

const pageWrapper = document.querySelector('.page-wrapper');
pageWrapper.style.paddingTop = header.offsetHeight + 'px';
pageWrapper.style.paddingBottom = header.offsetHeight + 'px'
            
