import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import TabContent from './components/TabContent';
import AddCourseForm from './components/AddCourseForm';
import AddInstanceForm from './components/AddInstanceForm';
import ListCourses from './components/ListCourses';
import ListInstances from './components/CourseInstanceList';
import SearchCourse from './components/SearchCourse';
// import SearchInstance from './components/SearchInstance';
import './style4.css';

function App() {
    const [activeTab, setActiveTab] = useState('addCourse');

    return (
        <div className="container">
            <h1>Course Management</h1>
            <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabContent activeTab={activeTab === 'addCourse'}>
                <AddCourseForm />
            </TabContent>
            <TabContent activeTab={activeTab === 'addInstance'}>
                <AddInstanceForm />
            </TabContent>
            <TabContent activeTab={activeTab === 'listCourses'}>
                <ListCourses />
            </TabContent>
            <TabContent activeTab={activeTab === 'CourseInstanceList'}>
                <ListInstances />
            </TabContent>
            <TabContent activeTab={activeTab === 'searchCourse'}>
                <SearchCourse />
            </TabContent>
            {/* <TabContent activeTab={activeTab === 'searchInstance'}>
                <SearchInstance />
            </TabContent> */}
        </div>
    );
}

export default App;
