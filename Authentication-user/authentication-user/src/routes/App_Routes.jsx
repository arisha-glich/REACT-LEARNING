import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from '../components/authentication/Signup';
import Login from '../components/authentication/Login';
import Dashboard from '../components/dashboard/Dashboard';
import AdminBoard from '../components/admin/AdminBoard';
//<Router></Router>  :  It keeps the UI in sync with the URL , history stack, smooth navigation
//<Routes></Routes>  :  Wraps your entire application and provides the routing context.
//<Route> </Route>   :  matching the current URL, and rendering the corresponding component(which is in Element)

function App_Routes() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<AdminBoard />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App_Routes;
