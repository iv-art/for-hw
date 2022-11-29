let myform = document.querySelector('.myform');
let inputs = document.querySelectorAll('.check');

let pattern = {
  'name': {'template': /^[А-Яа-я]+( )*[А-Яа-я]*$/g, 'message': 'вы не ввели имя'},
  'phone': {'template': /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/, 'message': 'введите корректный номер телефона'},
  'email': {'template': /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, 'message': 'введите настоящую почту'}
};

function submitForm(event){
  // console.log(event);
  // console.log(event.target);
  // console.log(myform.elements);
  let arrFormElements = Array.from(inputs);
  let notValidCount = 0;
  for (let elem of arrFormElements) {
    let patternA = pattern[elem.name]['template'];
    console.log(patternA, '==', elem.value);
    console.log(patternA.test(elem.value));
    
    if (patternA.test(elem.value)) {
      console.log('подходит под паттерн');
    }
    else {
    console.log('not valid')
    elem.classList.add('err');
    elem.addEventListener('input', function() {elem.classList.remove('err')})
    notValidCount++;}
  }
  if (notValidCount > 0) {
    console.log('проверьте поля ввода');
    event.preventDefault();
  }
  else {console.log('все нормально')}
  // event.preventDefault();
    // window.history.back();
  }

  document.querySelector('.myform').addEventListener("submit", submitForm
  
  // function(event) {
  //   event.preventDefault();
  //   window.history.back();
  // }, true
  
  );