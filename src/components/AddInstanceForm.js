import React, { useState, useEffect } from 'react';
import { getAllCourses } from '../services/courseService';
import { createCourseInstance } from '../services/instanceService';

const AddInstanceForm = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for the success message

    // List of semesters
    const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        const courses = await getAllCourses();
        setCourses(courses);
        setSelectedCourse('');  // Clear the selected course
        setYear('');            // Clear the year
        setSemester('');        // Clear the semester
        setSuccessMessage('');  // Clear any existing success message
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const courseInstance = { courseId: selectedCourse, year, semester };
        try {
            await createCourseInstance(courseInstance);
            setSuccessMessage('Course instance successfully added!'); // Show success message
            setSelectedCourse(''); // Clear the form fields
            setYear('');
            setSemester('');
        } catch (error) {
            console.error('Error adding course instance:', error);
            setSuccessMessage('Failed to add course instance. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} required>
                    <option value="">Select Course</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>{course.title}</option>
                    ))}
                </select>
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
                <select value={semester} onChange={(e) => setSemester(e.target.value)} required>
                    <option value="">Select Semester</option>
                    {semesters.map(sem => (
                        <option key={sem} value={sem}>{sem}</option>
                    ))}
                </select>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="submit" className="btn" style={{ width: '48%' }}>Add Instance</button>
                    <button type="button" className="btn" style={{ width: '48%' }} onClick={fetchCourses}>Refresh</button>
                </div>
            </form>
            {successMessage && <p>{successMessage}</p>} {/* Display success message */}
        </div>
    );
};

export default AddInstanceForm;
