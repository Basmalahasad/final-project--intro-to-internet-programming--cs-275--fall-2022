let modal = document.getElementById(`modal`);
let menu = document.getElementById(`menu-link`);
let header = document.querySelector(`header`);
let body = document.querySelector(`body`);
let navigation = document.querySelector(`nav`);
menu.appendChild(navigation);
let showModal = () => {
    modal.style.display = `block`;
    navigation.style.display = `none`;
    body.style.overflow = `hidden`;
};
let showMenu = () => {
    navigation.style.display = `block`;
};

let modalClick =  document.getElementById(`modal-link`);
modalClick.setAttribute(`onclick`,`showModal();`);

menu.setAttribute(`onclick`,`showMenu();`);
