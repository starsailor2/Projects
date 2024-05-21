import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentPortal from './components/StudentPortal';
import CompanyPortal from './components/CompanyPortal';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/student" component={StudentPortal} />
                <Route path="/company" component={CompanyPortal} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" exact component={() => <h1>Welcome to T&P Cell</h1>} />
            </Switch>
        </Router>
    );
};

export default App;
