function init () {
  console.log('init');
  const button_element = document.querySelector('button');
  button_element.addEventListener('click', loadList);
}


function loadList () {
  console.log('loading list');
}


window.addEventListener('load', init);