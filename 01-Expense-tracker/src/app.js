'use strict';

import { initWelcomePage } from './pages/welcome-page.js';

const loadApp = () => {
  initWelcomePage();
};

window.addEventListener('load', loadApp);
