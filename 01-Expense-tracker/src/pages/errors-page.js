'use strict';
import { errorPopup } from '../views/errorPopup-view.js';
import { ClearSearchFields } from './welcome-page.js';
import { USER_INTERFACE_TOP, USER_INTERFACE_BOTTOM } from '../constants.js';

export const failedInputMessage = () => {
  const userInterfaceTop = document.getElementById(USER_INTERFACE_TOP);
  const errorMessage = errorPopup();
  userInterfaceTop.appendChild(errorMessage);
  const closeButton = document.getElementById('error-btn');
  closeButton.addEventListener('click', () => {
    const closePopup = document.querySelector('.error');
    closePopup.remove();
  });
  const closeSimple = document.getElementById('close-x');
  closeSimple.addEventListener('click', () => {
    const closePopup = document.querySelector('.error');
    closePopup.remove();
  });
};

export const failedSearchMessage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_BOTTOM);
  const expanseName = document.getElementById('input-search').value;
  userInterface.innerHTML = '';
  const failedSearch = document.createElement('p');
  failedSearch.classList.add('search-not-found');
  failedSearch.innerHTML = `Sorry, can't find the expanse name ( ${expanseName} ) may you entered a wrong expanse name!`;
  userInterface.appendChild(failedSearch);
  const showExpenseBtn = document.getElementById('show-btn');
  showExpenseBtn.disabled = false;
  ClearSearchFields();
};
