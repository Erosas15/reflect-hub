import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import App from './components/App/App'


const container = document.getElementById('root');
//create a root
const root = ReactDOMClient.createRoot(container);

//initial render: render an element to the root
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)


