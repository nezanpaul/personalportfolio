const hamburger = document.getElementById("navTrigger");
const navContainer = document.getElementById("navContainer");

hamburger.addEventListener('click',function(){
   navContainer.classList.toggle('show');
});
const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click',function(){
    navContainer.classList.remove('show');
})