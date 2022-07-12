'use strict';

import { failedInputMessage } from './errors-page.js';

export const inputChecker = (name, date, amount) => {
  name = document.getElementById('input-name').value;
  date = document.getElementById('input-desc').value;
  amount = document.getElementById('input-amount').value;
  if (name === '' || date === '' || amount === '') {
    failedInputMessage();
  } else {
    addToExpanseList();
  }
};

const addToExpanseList = (name, date, amount, dele) => {
  const table = document.getElementById('table-body');
  const row = document.createElement('tr');
  console.log(row, 'ROW');

  name = document.getElementById('input-name').value;
  const newName = document.createElement('td');
  newName.textContent = name;
  row.appendChild(newName);

  date = document.getElementById('input-desc').value;
  const newDate = document.createElement('td');
  const dateObj = new Date(date);
  const formatDate = dateObj.toLocaleString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  newDate.innerText = formatDate;
  row.appendChild(newDate);

  amount = document.getElementById('input-amount').value;
  const newAmount = document.createElement('td');
  newAmount.textContent = `€${amount}`;
  row.appendChild(newAmount);

  dele = document.createElement('td');
  dele.innerHTML = `
    <i id="delete-icon" class="fa-solid fa-trash-can"></i>`;
  row.appendChild(dele);

  const deleteElement = document.getElementById('delete-icon');
  deleteElement.addEventListener('click', function deleteRow() {
    row.remove();
  });
};


// const addToExpanseList = () => {
//   const name = document.getElementById('input-name').value;
//   const date = document.getElementById('input-desc').value;
//   const amount = document.getElementById('input-amount').value;
//   const newAmount = `€${amount}`;
  
//   const tbodyEl = document.getElementById('table-body');
//   tbodyEl.innerHTML += `
//   <tr>
//   <td>${name}</td>
//   <td>${date}</td>
//   <td>${newAmount}</td>
//   <td><i id="delete-icon" class="fa-solid fa-trash-can"></i></td>
//   </tr>
//   `;
// };


// e.preventDefault();
