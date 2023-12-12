import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

if (!document.getElementById("c2vm-tle")) {
  const panelDiv = document.createElement("div");
  panelDiv.id = "c2vm-tle";
  document.body.appendChild(panelDiv);
  ReactDOM.createRoot(panelDiv).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
  );
}