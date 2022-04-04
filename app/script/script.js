const hambergerBtn = document.querySelector('.hamberger-button')
const hambergerMenu = document.querySelector('.hamberger-menu')
hambergerBtn.addEventListener('click', handleHamberger)
function handleHamberger(){
    hambergerBtn.classList.toggle("active")
    if(hambergerBtn.classList.contains("active")){
        hambergerMenu.classList.add("active")
    }
    else{
        hambergerMenu.classList.remove("active")
    }
}