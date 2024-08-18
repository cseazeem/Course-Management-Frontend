import React, { useState } from 'react';
import { createCourse } from '../services/courseService';

const AddCourseForm = () => {
    const [title, setTitle] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for the success message

    const handleSubmit = async (event) => {
        event.preventDefault();
        const course = { title, courseCode, description };
        try {
            await createCourse(course);
            setSuccessMessage('Course successfully added!'); // Show success message
            setTitle(''); // Clear the form fields
            setCourseCode('');
            setDescription('');
        } catch (error) {
            console.error('Error adding course:', error);
            setSuccessMessage('Failed to add course. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" required />
                <input type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} placeholder="Course Code" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Course Description" required />
                <button type="submit" className="btn">Add Course</button>
            </form>
            {successMessage && <p>{successMessage}</p>} {/* Display success message */}
        </div>
    );
};

export default AddCourseForm;
