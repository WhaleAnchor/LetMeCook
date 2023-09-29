import React from "react";
import Navbar from '../components/Navbar';
import './WebWrapper.css';

import Recipe from './Recipe'

function WebWrapper() {
    return (
        <div className="web-wrapper">
            <div className="main-content">
                <Navbar />
                <Recipe />
            </div>
        </div>
    );
};

export default WebWrapper