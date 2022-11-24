'use strict';

//I selected buttons of news.html in order to make view more button work. 
const loadcontent = document.querySelectorAll('#tshirtContent');
const btn = document.querySelector('#tshirt');
//i added function that holds the button 
btn.addEventListener('click', () => {
      loadcontent.forEach(item => {
        item.style.display = 'block';
        //while the buton clicked the buttons gets disaapear and the other products gonna have display clog property.
      })
      btn.style.display = 'none';
})
// here also the same function for the second time.
const shoesContent = document.querySelectorAll('#shoesContent');
const btnShoes = document.querySelector('#shoesbtn');
btnShoes.addEventListener('click', () => {
    shoesContent.forEach(item => {
        item.style.display = 'block'
    })
    btnShoes.style.display = 'none';
})