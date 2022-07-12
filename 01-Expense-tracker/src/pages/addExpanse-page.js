'use strict';

import { failedInputMessage } from './errors-page.js';

export const inputChecker = (e) => {
  e.preventDefault();

  const name = document.getElementById('input-name').value;
  const date = document.getElementById('input-desc').value;
  const amount = document.getElementById('input-amount').value;
  if (name === '' || date === '' || amount === '') {
    failedInputMessage();
  } else {
    addToExpanseList();
  }
};

const addToExpanseList = () => {
  const table = document.getElementById('table-body');
  const row = document.createElement('tr');
  row.classList.add('expanse-row');
  table.appendChild(row);
  console.log(row, 'ROW');

  const name = document.getElementById('input-name').value;
  const newName = document.createElement('td');
  newName.textContent = name;
  row.appendChild(newName);

  const date = document.getElementById('input-desc').value;
  const newDate = document.createElement('td');
  const dateObj = new Date(date);
  const formatDate = dateObj.toLocaleString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  newDate.innerText = formatDate;
  row.appendChild(newDate);

  const allRows = document.querySelectorAll('.expanse-row');
  const rowNumber = `00${allRows.length + 1}`;

  const amount = document.getElementById('input-amount').value;
  const newAmount = document.createElement('td');
  newAmount.textContent = `€${amount}`;
  row.appendChild(newAmount);

  const dele = document.createElement('td');
  dele.innerHTML = `
    <i id="delete-icon-${rowNumber}" class="fa-solid fa-trash-can" id="delete-btn"></i>`;
  row.appendChild(dele);

  const deleteElement = document.getElementById(`delete-icon-${rowNumber}`);
  deleteElement.addEventListener('click', function deleteRow() {
    row.remove();
  });
};
