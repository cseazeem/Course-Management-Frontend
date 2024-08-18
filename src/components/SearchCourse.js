import React, { useState } from 'react';
import { getCourseById } from '../services/courseService';

const SearchCourse = () => {
    const [courseId, setCourseId] = useState('');
    const [course, setCourse] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fetchedCourse = await getCourseById(courseId);
        setCourse(fetchedCourse);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={courseId} onChange={(e) => setCourseId(e.target.value)} placeholder="Enter Course ID" required />
                <button type="submit" className="btn">Search Course</button>
            </form>
            {course && (
                <div className="table-section">
                    <h3>Course Details</h3>
                    <p><strong>Title:</strong> {course.title}</p>
                    <p><strong>Code:</strong> {course.courseCode}</p>
                    <p><strong>Description:</strong> {course.description}</p>
                </div>
            )}
        </div>
    );
};

export default SearchCourse;
