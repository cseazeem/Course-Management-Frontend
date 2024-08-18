import React from 'react';

const TabContent = ({ activeTab, children }) => {
    return (
        <div className={`tab-content ${activeTab ? 'active' : ''}`}>
            {children}
        </div>
    );
};

export default TabContent;
