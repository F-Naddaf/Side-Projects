'use strict';

export const logoSection = () => {
  const element = document.createElement('nav');
  element.classList.add('nav');
  element.innerHTML = `
  <ul>
    <li id="logo"><img class="logo-image" src = './public/Image/Expense-logo.png' alt="Expense" height="120px"/></li>
    <li id="Expense">Expense Tracker</li>
  </ul>
`;
  return element;
};

export const mainExpenseAdding = () => {
  const element = document.createElement('div');
  element.classList.add('main');
  element.innerHTML = `
  <h2 class="header">Add A New Item</h2> 
  <form id="expanse-form">
    <div id="label-section-top">
    <label class="input-description"> Name:</label>
    <input type="text" id="input-name" class="input-name" placeholder="What was the Expense made?"/>
    </div>
    <div id="label-section-down">
      <label class="input-description"> Date:</label>
      <input type="date" id="input-desc" class="input-2" placeholder="dd/mm/yy"/>
      <label class="input-description"> Amount:</label>
      <input type="number" id="input-amount" class="input-2" placeholder="Amount"/>
    </div>
    <div id="buttons">
      <button id="submit-btn" type="submit">Add Expense</button>
      <button id="show-btn" type="button">Show all Expense</button>
    </div>
  </form>
  <div id="search-section">
    <form id="form-search">
      <label class="input-description"> Search:</label>
      <input type="text" id="input-search" placeholder="Find your Expense by name"/>
      <button type="submit" id="search-btn" type="submit">Search</button>
    </form>
  </div>    
`;
  return element;
};

export const viewExpenseSection = () => {
  const element = document.createElement('div');
  element.classList.add('expanse');
  element.innerHTML = `
  <section class="section">
    <table id="table">
      <tr>
        <th id="table-name">Name</th>
        <th id="table-date">Date</th>
        <th id="table-amount">Amount</th>
        <th id="del-edit">Delete</th>
      </tr>
    <tbody id="table-body">
    </tbody>  
    </table>
    <form id="form-total">
      <h3 class="total"> Total:</h2>
      <input type="text" id="input-total" disabled = "true"/>
    </form>
  </section>
`;
  return element;
};
