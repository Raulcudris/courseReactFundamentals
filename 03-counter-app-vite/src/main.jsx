import React from 'react';
import ReactDom from 'react-dom/client';
//import { HelloWorldApp } from './HelloWorldApp';
//import CounterApp from './CounterApp';
import { FirstApp } from './FirstApp';
import './index.css';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value={20} /> */}
        <FirstApp title='Hola, Soy Raul' />
    </React.StrictMode>
);
