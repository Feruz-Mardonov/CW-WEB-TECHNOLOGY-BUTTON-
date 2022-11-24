'use strict';
//to make navbar responsive I selected the required dom elemnts
const btnNavOpen = document.querySelector('.open_nav');
const btnNavClose = document.querySelector('.close_nav');
const navMenu = document.querySelector('.nav_menu');
//then gave the function that controlls the opening and closing of navbar
if(btnNavOpen){
    btnNavOpen.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(btnNavClose){
    btnNavClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// filtering items index
const tabs = document.querySelectorAll('.tabsqu');
const tshirtCards = document.querySelectorAll('#tshirt-tab'),
    shoesCards = document.querySelectorAll('#shoes-tab'),
    poloCards = document.querySelectorAll('#polo-tab'),
    allcard = document.querySelectorAll('.card')
// here I get all tabs 
// And I seperate this array data with  forEach
tabs.forEach((item, index) => {
   if (index == 0) {
    allcard.forEach(item => {
        item.style.display = 'flex';
    })
    tabs.forEach(item => {
        item.classList.remove('active_tab')
    })
    // i worked with classList 
    tabs[0].classList.add('active_tab')
   }
})

   // i did function with each tab.
    tabs[0].addEventListener('click', () =>{
            //it was given animation to make more impressive
            allcard.forEach(item => {
                item.style.cssText = 'animation: floating 3s linear; display: flex';
            })
            tabs.forEach(item => {
                item.classList.remove('active_tab')
            })
            tabs[0].classList.add('active_tab')
      
    })
    tabs[1].addEventListener('click', () =>{
            allcard.forEach(item => {
                item.style.display = 'none';
            })
            tshirtCards.forEach(item => {
                item.style.cssText = 'animation: floating 3s linear; display: flex';
            })
            tabs.forEach(item => {
                item.classList.remove('active_tab')
            })
            tabs[1].classList.add('active_tab')
    })
    tabs[2].addEventListener('click', () =>{
            allcard.forEach(item => {
                item.style.display = 'none';
            })
            shoesCards.forEach(item => {
                item.style.cssText = 'animation: floating 3s linear; display: flex';
            })
            tabs.forEach(item => {
                item.classList.remove('active_tab')
            })
            tabs[2].classList.add('active_tab')
    })
    tabs[3].addEventListener('click', () =>{
            allcard.forEach(item => {
                item.style.display = 'none';
            })
            poloCards.forEach(item => {
                item.style.cssText = 'animation: floating 3s linear; display: flex';
            })
            tabs.forEach(item => {
                item.classList.remove('active_tab')
            })
            tabs[3].classList.add('active_tab')
    })

