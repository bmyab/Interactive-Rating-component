const submit_btn = document.querySelector('.cta');
const card_1 = document.querySelector('.card__rating'); 
const card_2 = document.querySelector('.card__thanks'); 
const rating_opc=document.querySelectorAll('.opc');
const score = document.querySelector('.score')
let opc_score = 4; //Value Default

submit_btn.addEventListener('click', onSubmit);
rating_opc.forEach(btn =>{
  btn.addEventListener('click',ratingClick);
})

function onSubmit(){
  card_1.classList.add('hide');
  card_2.classList.remove('hide');
  score.textContent = opc_score;
  // console.log(rating_opc);
}
function ratingClick(e){
  // console.log('rating click')
  rating_opc.forEach(btn =>{
    btn.classList.remove('select');
  })
  e.target.classList.add('select');

  //Tomar valor de las opciones
  opc_score = event.target.textContent;
  console.log(opc_score)
}