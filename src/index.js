import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';
import { nextTheme } from './nextui';
import { ObjecttProvider } from './contexts/ObjecttContext';


const darkTheme = nextTheme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ObjecttProvider>
      <NextUIProvider theme={darkTheme}>
        <App />
      </NextUIProvider>
    </ObjecttProvider>
  </React.StrictMode>
);
