import React from 'react';
import ReactDOM from 'react-dom/client';
import '@babel/polyfill';
import App from '@/App';
import './styles/style.css';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container!);
root.render(<App />);
