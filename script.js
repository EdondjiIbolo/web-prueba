const togglemenu = document.getElementById('toggle__menu');
const menu = document.getElementById('nav');

togglemenu.addEventListener('click',(e)=>{
if(e.target.id=='toggle__menu'||e.target.parentElement.id=='toggle__menu'){
    menu.classList.toggle('mostrar');
    togglemenu.classList.toggle('mostrar');
    document.body.classList.toggle('dark')
}
})