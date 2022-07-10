'use strict';

import { USER_INTERFACE_TOP } from '../constants.js';
import { USER_INTERFACE_BOTTOM } from '../constants.js';
import { errorPopup } from '../views/errorPopup-view.js';
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
    const userInterfaceBottom = document.getElementById(USER_INTERFACE_BOTTOM)
    userInterfaceBottom.innerHTML = '';
    const showAllExpense = viewExpenseSection();
    userInterfaceBottom.appendChild(showAllExpense);
    showExpenseBtn.disabled = true;
  });

  const addExpButton = document.getElementById('submit-btn');
  addExpButton.addEventListener('click', inputChecker);

  const searchButton = document.getElementById('search-btn');
  searchButton.addEventListener('click', failedSearchMessage);
};

const inputChecker = () => {
  let inputName = document.getElementById('input-name').value;
  let inputDescription = document.getElementById('input-desc').value;
  let inputAmount = document.getElementById('input-amount').value;
  if (inputName === '' || inputDescription === '' || inputAmount === '') {
    failedInputMessage();
  } else {
    return;
    // addToExpanseList();
  }
};

const failedInputMessage = () => {
  const userInterfaceTop = document.getElementById(USER_INTERFACE_TOP);
  const errorMessage = errorPopup();
  userInterfaceTop.appendChild(errorMessage);
  const closeButton = document.getElementById('error-btn');
  closeButton.addEventListener('click', () => {
    const closePopup = document.querySelector('.error');
    closePopup.remove();
  });
  const closeSimple = document.getElementsByTagName('i');
  closeSimple.addEventListener('click', () => {
    const closePopup = document.querySelector('.error');
    closePopup.remove();
  });
};

const failedSearchMessage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_BOTTOM);
  const expanseName = document.getElementById('input-search').value;
  userInterface.innerHTML = '';
  const failedSearch = document.createElement('p');
  failedSearch.classList.add('search-not-found');
  failedSearch.innerHTML = `Sorry, can't find the expanse name ( ${expanseName} ) may you entered a wrong expanse name!`;
  userInterface.appendChild(failedSearch);
  const showExpenseBtn = document.getElementById('show-btn');
  showExpenseBtn.disabled = false
};
