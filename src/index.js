import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Store/Store';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <Provider store={Store}>
        <App/>
    </Provider>
);
