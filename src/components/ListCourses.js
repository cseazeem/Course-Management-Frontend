import React, { useEffect, useState } from 'react';
import { getAllCourses, deleteCourseById } from '../services/courseService';

const ListCourses = () => {
    const [courses, setCourses] = useState([]);
    const [successMessage, setSuccessMessage] = useState(''); // State for the success message

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        const allCourses = await getAllCourses();
        setCourses(allCourses);
        setSuccessMessage(''); // Clear success message when courses are fetched
    };

    const handleDelete = async (id) => {
        try {
            await deleteCourseById(id);
            setSuccessMessage('Course successfully deleted!'); // Set success message
            fetchCourses(); // Refresh the course list after deletion
        } catch (error) {
            console.error('Error deleting course:', error);
            setSuccessMessage('Failed to delete course. Please try again.');
        }
    };

    return (
        <div className="table-section">
            {successMessage && <p>{successMessage}</p>} {/* Display success message */}
            <table>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.courseCode}</td>
                            <td>
                                <button className="action-btn" onClick={() => handleDelete(course.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListCourses;
