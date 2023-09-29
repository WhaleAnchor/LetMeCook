import React from 'react';
import "./Recipe.css";

export function Recipe() {
    return (
        <div className='recipe-wrapper'>
            <div className='content-row'>
                <div className='content-column'>
                    <div className='column-section'>
                        recipe section 1
                        recipe section 1.2
                    </div>
                </div>
                <div className='content-column'>
                    <div className='column-section'>
                        <div>
                            recipe section 2
                        </div>
                        recipe section 2.2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe