//Transition menu

document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.querySelector('.menu-toggle');
    const menu_mobile = document.querySelector('.menu-mobile');

    menuToggle.addEventListener('click', function () {
       
        if(menu_mobile.style.maxHeight === '' || menu_mobile.style.maxHeight === '0px') {
            menu_mobile.style.maxHeight = menu_mobile.scrollHeight + 'px';
        }
        else {
            menu_mobile.style.maxHeight = '0px';
        }

    });
});