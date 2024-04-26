var menu = window.document.querySelector('#menu')
var menuIndex = window.document.querySelector('#menuIndex')
var opc1 = document.querySelector('#opc1')
var opc2 = document.querySelector('#opc2')
var opc3 = document.querySelector('#opc3')
var opc4 = document.querySelector('#opc4')
var clos = window.document.querySelector('#closed')

function mostra1(){
    opc1.style.display = 'block'
}
function mostra2(){
    opc2.style.display = 'block'
}
function mostra3(){
    opc3.style.display = 'block'
}
function mostra4(){
    opc4.style.display = 'block'
}
function mostra5(){
    clos.style.display = 'block'
}
function saiMenu(){
    menuIndex.style.display = 'none'
}
function showMenu(){
    setTimeout(saiMenu, 110)
    setTimeout(mostra1, 100)
    setTimeout(mostra2, 150)
    setTimeout(mostra3, 200)
    setTimeout(mostra4, 250)
    setTimeout(mostra5, 300)
}


function fecha1(){
    opc1.style.display = 'none'
}
function fecha2(){
    opc2.style.display = 'none'
}
function fecha3(){
    opc3.style.display = 'none'
}
function fecha4(){
    opc4.style.display = 'none'
}
function fecha5(){
    clos.style.display = 'none'
}
function voltaMenu(){
    menuIndex.style.display = 'block'
}
function closeMenu(){
    setTimeout(voltaMenu, 300)
    setTimeout(fecha1, 300)
    setTimeout(fecha2, 250)
    setTimeout(fecha3, 200)
    setTimeout(fecha4, 150)
    setTimeout(fecha5, 100)
}

