import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { AuthProvider } from '../src/context/AuthContext';
import '../public/css/styles.css';

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById('root')
);
