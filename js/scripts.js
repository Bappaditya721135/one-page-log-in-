'use strict';
document.querySelector('.login-btn').addEventListener('click',function(){
    document.querySelector('.log-in').classList.remove("hidden");
    document.querySelector('.overlay').classList.remove("hidden");
});
document.querySelector('.signup-btn').addEventListener('click',function(){
    document.querySelector('.sign-up').classList.remove("hidden");
    document.querySelector('.overlay').classList.remove("hidden");
    });
document.querySelector('.login-cross').addEventListener('click',function(){
    document.querySelector('.log-in').classList.add("hidden");
    document.querySelector('.overlay').classList.add("hidden");
})
document.querySelector('.signup-cross').addEventListener('click',function(){
    console.log('clicked');
    document.querySelector('.sign-up').classList.add("hidden");
    document.querySelector('.overlay').classList.add("hidden");
})