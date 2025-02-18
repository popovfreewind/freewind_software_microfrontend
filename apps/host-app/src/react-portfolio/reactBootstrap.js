import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactApp from './ReactApp';

const reactBootstrap = function(container) {
    const divContainer = document.createElement('div');
    container.appendChild(divContainer);
    const root = createRoot(divContainer);
    root.render(<ReactApp />);
}

export default reactBootstrap;
