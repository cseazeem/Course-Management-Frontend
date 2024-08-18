import React from 'react';

const NavTabs = ({ activeTab, setActiveTab }) => {
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="nav-tabs">
            <button className={`tab-link ${activeTab === 'addCourse' ? 'active' : ''}`} onClick={() => handleTabClick('addCourse')}>Add Course</button>
            <button className={`tab-link ${activeTab === 'addInstance' ? 'active' : ''}`} onClick={() => handleTabClick('addInstance')}>Add Instance</button>
            <button className={`tab-link ${activeTab === 'listCourses' ? 'active' : ''}`} onClick={() => handleTabClick('listCourses')}>List Courses</button>
            <button className={`tab-link ${activeTab === 'CourseInstanceList' ? 'active' : ''}`} onClick={() => handleTabClick('CourseInstanceList')}>List Instances</button>
            <button className={`tab-link ${activeTab === 'searchCourse' ? 'active' : ''}`} onClick={() => handleTabClick('searchCourse')}>Search Course</button>
        </div>
    );
};

export default NavTabs;
