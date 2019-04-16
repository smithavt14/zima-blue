// Variables
const mobileBtn = document.querySelector('.mbl-nav_menu-container')
const mobileHam = document.querySelector('.mbl-nav_hamburger')
const mobileLinkContainer = document.querySelector('.mbl-nav_link-container')
const mobileLink = document.querySelector('.mbl-nav_link')

// Event Listeners
mobileHam.addEventListener('click', (e) => {
  mobileHam.classList.toggle('mbl-nav_cross')
  mobileBtn.classList.toggle('mbl-nav_menu-container-lg')
  mobileLinkContainer.classList.toggle('hide')
})