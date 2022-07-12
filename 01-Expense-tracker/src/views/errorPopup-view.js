'use strict';

export const errorPopup = () => {
  const element = document.createElement('div');
  element.classList.add('error');
  element.innerHTML = `
    <div id="error-container">
      <div id='close-bar'>
        <i id="close-x" class="fa-solid fa-x"></i>
        <p id="error-desc">ERROR</p>
      </div>
      <h1 id="error-message-top">Sorry!</h1>
      <h2 id="error-message">You have not entered the data in the fields correctly</h2>
      <button id="error-btn">Close</button>
    </div>   
    `;
  return element;
};
