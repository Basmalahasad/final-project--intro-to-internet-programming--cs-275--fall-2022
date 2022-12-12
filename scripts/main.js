/*
* Basmalah Asad, final assignment, 12/12/2022
*/

let modal = document.getElementById(`modal`);
let menu = document.getElementById(`menu-link`);
let header = document.querySelector(`header`);
let body = document.querySelector(`body`);
let navigation = document.querySelector(`nav`);
menu.appendChild(navigation);

// shows modal and hides scroll bars
let showModal = () => {
    modal.style.display = `block`;
    navigation.style.display = `none`;
    body.style.overflow = `hidden`;
};

//shows menu
let showMenu = () => {
    navigation.style.display = `block`;
};

let modalClick =  document.getElementById(`modal-link`);
modalClick.setAttribute(`onclick`,`showModal();`);

menu.setAttribute(`onclick`,`showMenu();`);

document.addEventListener(`keydown`, (e) => {
    if (e.key === `Escape`)
        modal.style.display = `none`;
});

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = `none`;
        body.style.overflow = `scroll`;
    }
    if (e.target == header){
        //exits the menu if the header is clicked
        navigation.style.display = `none`;
    }
};

