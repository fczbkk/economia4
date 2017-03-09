function init () {
  const button_element = document.querySelector('button');
  button_element.addEventListener('click', loadList);
}


function loadList () {
  const url = '/data';
  ajax(url, handleData);
}


function createPersonRow (person_data) {
  return `
      <tr>
        <td>${person_data.first_name}</td>
        <td>${person_data.last_name}</td>
        <td>${person_data.email}</td>
      </tr>
    `;
}


function handleData (data) {
  const parsed_data = JSON.parse(data);
  const target_element = document.querySelector('#content');

  const people_list = parsed_data.people.map(createPersonRow);

  const content = `
    <table>
      <tr><th>first_name</th><th>last_name</th><th>email</th></tr>
      ${people_list.join('')}
    </table>
  `;

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