let index = document.querySelector('.toggle');
let body = document.querySelector('body');

index.addEventListener('click', function (){
    body.classList.toggle('open');
});
