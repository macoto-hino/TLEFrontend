import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPanel from '@/components/main-panel/index';
import LaneDirectionTool from './components/lane-direction-tool';

if (!document.getElementById("c2vm-tle")) {
  const panelDiv = document.createElement("div");
  panelDiv.id = "c2vm-tle";
  document.body.appendChild(panelDiv);
  ReactDOM.createRoot(panelDiv).render(
    <React.StrictMode>
      <MainPanel />
      <LaneDirectionTool />
    </React.StrictMode>,
  );
}