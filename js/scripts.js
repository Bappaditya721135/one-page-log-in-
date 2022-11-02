'use strict';
const divLog_in=document.querySelector('.log-in');
const divSign_up=document.querySelector('.sign-up');
const overlay=document.querySelector('.overlay');

document.querySelector('.login-btn').addEventListener('click',function(){
    divLog_in.classList.remove("hidden");
    overlay.classList.remove("hidden");
});
document.querySelector('.signup-btn').addEventListener('click',function(){
    divSign_up.classList.remove("hidden");
    overlay.classList.remove("hidden");
    });
document.querySelector('.login-cross').addEventListener('click',function(){
    divLog_in.classList.add("hidden");
    overlay.classList.add("hidden");
})
document.querySelector('.signup-cross').addEventListener('click',function(){
    console.log('clicked');
    divSign_up.classList.add("hidden");
    overlay.classList.add("hidden");
})
document.querySelector('.overlay').addEventListener('click',function(){
    divSign_up.classList.add("hidden");
    overlay.classList.add("hidden");
    divLog_in.classList.add("hidden");
})