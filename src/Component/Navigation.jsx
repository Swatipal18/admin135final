import React from 'react'
import '../App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Admin from '../Component/Admin';
import NewItem from './form/NewItem';
import LoginForm from './form/LoginForm';

function Navigation() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={< LoginForm />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/create-item" element={<NewItem />} />
                    <Route path="/new-" element={<NewItem />} />


                </Routes>
            </Router >
        </>

    )
}

export default Navigation