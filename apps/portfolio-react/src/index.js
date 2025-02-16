import React from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioComponent from './PortfolioComponent';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<PortfolioComponent />);