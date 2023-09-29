import React from "react";
import Navbar from '../components/Navbar';
import './WebWrapper.css';

import Recipes from './Recipes'

function WebWrapper() {
    return (
        <div className="web-wrapper">
            <div className="main-content">
                <Navbar />
                <Recipes />
            </div>
        </div>
    );
};

export default WebWrapper