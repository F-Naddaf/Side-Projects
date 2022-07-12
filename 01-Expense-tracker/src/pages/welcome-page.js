'use strict';

import { failedSearchMessage } from './errors-page.js';
import { USER_INTERFACE_TOP, USER_INTERFACE_BOTTOM } from '../constants.js';
import { inputChecker } from './addExpanse-page.js';
import {
  logoSection,
  mainExpenseAdding,
  viewExpenseSection,
} from '../views/welcome-view.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_TOP);
  userInterface.innerHTML = '';

  const logo = logoSection();
  userInterface.appendChild(logo);

  const mainExpense = mainExpenseAdding();
  userInterface.appendChild(mainExpense);

  const showExpenseBtn = document.getElementById('show-btn');
  showExpenseBtn.addEventListener('click', () => {
    const userInterfaceBottom = document.getElementById(USER_INTERFACE_BOTTOM);
    userInterfaceBottom.innerHTML = '';
    const showAllExpense = viewExpenseSection();
    userInterfaceBottom.appendChild(showAllExpense);
    showExpenseBtn.disabled = true;
  });

  const addExpButton = document.getElementById('submit-btn');
  addExpButton.addEventListener('click', inputChecker);

  const searchButton = document.getElementById('search-btn');
  searchButton.addEventListener('click', searchChecker);
};

export const ClearSearchFields = () => {
  document.getElementById('input-search').value = '';
};

const searchChecker = () => {
  const userInterface = document.getElementById(USER_INTERFACE_BOTTOM);
  const expanseName = document.getElementById('input-search').value;
  const dataTable = document.getElementsByTagName('td').value;
  // const findExpanses = Array.from(dataTable).forEach(element => {
  const findExpanses = dataTable.map((element) => {
    if (element == expanseName) {
      console.log(findExpanses, 'hello')
    } else {
      failedSearchMessage();
    }
  });
};
