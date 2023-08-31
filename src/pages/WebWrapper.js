import React from "react";
import Navbar from '../components/Navbar';

import Recipe from './Recipe'

function WebWrapper() {
    return (
        <div>
            <Navbar />
            <div>
                <Recipe />
            </div>
        </div>
    );
};

export default WebWrapper