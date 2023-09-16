const modal = document.querySelector('.modal');
const modalSpider = document.querySelector('#modalCardSpider');
const modalRobin = document.querySelector('#modalCardRobin');
const modalBatman = document.querySelector('#modalCardBatman');
const btnSpiderman = document.querySelector('.btnSpiderman');
const btnRobin = document.querySelector('.btnRobin');
const btnBatman = document.querySelector('.btnBatman');
const btnSpidermanClose = document.querySelector('.modal__content--close');

function closeModal() {
  modal.classList.add('inactive');
}

function openModalSpider(){
  modal.classList.remove('inactive');
  modalSpider.classList.remove('inactive');
  modalRobin.classList.add('inactive');
  modalBatman.classList.add('inactive');
}
function openModalRobin(){
  modal.classList.remove('inactive');
  modalSpider.classList.add('inactive');
  modalRobin.classList.remove('inactive');
  modalBatman.classList.add('inactive');
}
function openModalBatman(){
  modal.classList.remove('inactive');
  modalSpider.classList.add('inactive');
  modalRobin.classList.add('inactive');
  modalBatman.classList.remove('inactive');
}

btnSpiderman.addEventListener('click',openModalSpider)
btnRobin.addEventListener('click', openModalRobin);
btnBatman.addEventListener('click', openModalBatman);

btnSpidermanClose.addEventListener('click',closeModal)