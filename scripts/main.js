let modal = document.getElementById(`modal`);
let showModal = () => {
    modal.style.display = `block`;
};
let modalClick =  document.getElementById(`modal-link`);
modalClick.setAttribute(`onclick`,`showModal();`);
