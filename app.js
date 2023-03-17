//Selecionando os campos de input
const celsius = document.querySelector('#celsius'),
 fahrenheit = document.querySelector('#fahrenheit');

//este foco para o campo de entrada Celsius quando a página carrega
window.addEventListener('load', ()=> celsius.focus());

// Convertendo o valor Celsius para Fahrenheit
celsius.addEventListener('input', ()=> {
  fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2)
  //limpar a entrada fahrenheit quando a entrada celsius estiver vazia
  if(!celsius.value) fahrenheit.value = '';
})

//Convertendo o valor Fahrenheit para Celsius
  fahrenheit.addEventListener('input', () =>{
  celsius.value = (((fahrenheit.value - 32) * 5 ) / 9).toFixed(2)
   //limpar a entrada fahrenheit quando a entrada celsius estiver vazia
   if(!fahrenheit.value) celsius.value = ''
})



