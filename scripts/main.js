let modal = document.getElementById(`modal`);
let menu = document.getElementById(`menu-link`);
let navigation = document.querySelector(`nav`);
menu.appendChild(navigation);
let showModal = () => {
    modal.style.display = `block`;
};
let modalClick =  document.getElementById(`modal-link`);
modalClick.setAttribute(`onclick`,`showModal();`);
