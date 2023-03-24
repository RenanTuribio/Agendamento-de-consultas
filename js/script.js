const getElement = (...queries) => document.querySelector(...queries); 

const addBtn = getElement('.add');
const btnsOcultos = getElement('.botoes_ocultos');
const modal = getElement('.modal')

const desocultar = 'desocultar';

const openModal = () => {btnsOcultos.classList.add(desocultar)};
const fecharModal = () => {btnsOcultos.classList.remove(desocultar)};

addBtn.addEventListener('click', () => {
    if(btnsOcultos.classList.contains(desocultar)){
        fecharModal();
    } else {
        openModal();
    }
});

btnsOcultos.addEventListener('click', (event) => {
    if (modal.contains(event.Target)) return
    fecharModal();
});