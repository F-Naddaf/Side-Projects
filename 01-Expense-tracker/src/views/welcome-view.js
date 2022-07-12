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
  <form id="form-name">
    <h3 class="input-description"> Name:</h2>
    <input type="text" id="input-name" class="input-name" placeholder="What was the Expense made?"/>
  </form>
  <form id="form-name">
    <h3 class="input-description"> Date:</h2>
    <input type="date" id="input-desc" class="input-2" placeholder="dd/mm/yy"/>
    <h3 class="input-description"> Amount:</h2>
    <input type="number" id="input-amount" class="input-2" placeholder="Amount"/>
  </form>
  <div id="buttons">
    <button id="submit-btn">Add Expense</button>
    <button id="show-btn">Show all Expense</button>
  </div>
  <div id="search-section">
  <form id="form-search">
  <h3 class="input-description"> Search:</h2>
      <input type="text" id="input-search" placeholder="Find your Expense by name"/>
      </form>
      <button type="submit" id="search-btn">Search</button>
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
      <tr>
        <td id="table-name">McDonald's</td>
        <td id="table-date">12-10-2022</td>
        <td id="table-amount">$10</td>
        <td id="del-edit"><i id="delete-icon" class="fa-solid fa-trash-can"></i></td>
      </tr>
      <tr>
        <td id="table-name">Groen West</td>
        <td id="table-date">09-09-2022</td>
        <td id="table-amount">$210</td>
        <td id="del-edit"><i id="delete-icon" class="fa-solid fa-trash-can"></i></td>
      </tr>
      <tr>
        <td id="table-name">Vattenfall</td>
        <td id="table-date">01-09-2022</td>
        <td id="table-amount">$90</td>
        <td id="del-edit"><i id="delete-icon" class="fa-solid fa-trash-can"></i></td>
      </tr>
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
