import React, { useState } from 'react';
import { getInstancesByYearSemesterAndId, deleteCourseInstanceById } from '../services/instanceService';
import './CourseInstanceList.css';

const CourseInstanceList = () => {
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [courseId, setCourseId] = useState('');
    const [instances, setInstances] = useState([]);
    const [message, setMessage] = useState(''); // New state for messages

    // Fetch instances based on search criteria
    const handleSearch = async (event) => {
        event.preventDefault();
        const fetchedInstances = await getInstancesByYearSemesterAndId(year, semester, courseId);
        setInstances(fetchedInstances); // Set the fetched instances to state

        if (fetchedInstances.length > 0) {
            setMessage(`${fetchedInstances.length} instances found.`);
        } else {
            setMessage('No instances found.');
        }
    };

    // Delete instance
    const handleDelete = async (year, semester, courseId) => {
        try {
            await deleteCourseInstanceById(year, semester, courseId);
            console.log(`Deleted instance with Course ID: ${courseId}`);
            // Refresh the list of instances after deletion
            const refreshedInstances = await getInstancesByYearSemesterAndId(year, semester, courseId);
            setInstances(refreshedInstances); // Update the state after deletion

            if (refreshedInstances.length > 0) {
                setMessage(`${refreshedInstances.length} instances found.`);
            } else {
                setMessage('No instances found.');
            }
        } catch (error) {
            console.error('Failed to delete the instance:', error);
            setMessage('Failed to delete the instance.');
        }
    };

    // Determine the header based on the inputs
    const getYearSemesterHeader = () => {
        if (year && !semester) {
            return "Year";
        }
        return "Year-Sem";
    };

    return (
        <div className="course-instance-list">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    value={year} 
                    onChange={(e) => setYear(e.target.value)} 
                    placeholder="Year" 
                    className="input-year" 
                />
                <input 
                    type="text" 
                    value={semester} 
                    onChange={(e) => setSemester(e.target.value)} 
                    placeholder="Semester"  
                    className="input-semester"
                />
                <input 
                    type="text" 
                    value={courseId} 
                    onChange={(e) => setCourseId(e.target.value)} 
                    placeholder="Course ID" 
                    className="input-course-id"
                />
                <button type="submit" className="btn-list-instances">List instances</button>
            </form>

            {message && <p className="message">{message}</p>} {/* Display message */}

            <table className="instances-table">
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>{getYearSemesterHeader()}</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {instances.map(instance => (
                        <tr key={instance.courseId}>
                            <td>{instance.title}</td>
                            <td>{instance.year}-{instance.semester}</td>
                            <td>{instance.courseCode}</td>
                            <td>
                                <button className="action-btn view-btn">
                                    <i className="fa fa-search"></i>
                                </button>
                                <button 
                                    className="action-btn delete-btn" 
                                    onClick={() => handleDelete(instance.year, instance.semester, instance.courseId)}
                                >
                                    Delete
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseInstanceList;
