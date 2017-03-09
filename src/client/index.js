function init () {
  console.log('init');
  const button_element = document.querySelector('button');
  button_element.addEventListener('click', loadList);
}


function loadList () {
  console.log('loading list');
  const url = '/data';
  ajax(url, handleData);
}


function handleData (data) {
  const parsed_data = JSON.parse(data);
  const target_element = document.querySelector('#content');

  let content = '<table>' +
    '<tr><th>first_name</th><th>last_name</th><th>email</th></tr>';

  parsed_data.people.forEach(function (person_data) {
    content += '<tr><td>' + person_data.first_name + '</td><td>' + person_data.last_name + '</td><td>' + person_data.email + '</td></tr>';
  });

  content += '</table>';

  target_element.innerHTML = content;
}


function ajax (url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        callback(xhr.responseText);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}


window.addEventListener('load', init);