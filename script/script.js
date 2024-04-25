var menu = window.document.querySelector('#menu')
var menuIndex = window.document.querySelector('#menuIndex')



function showMenu(){
    menu.style.display = 'flex'
    menuIndex.style.display = 'none'
}

function closeMenu(){
    menu.style.display = 'none'
    menuIndex.style.display = 'block'
}

