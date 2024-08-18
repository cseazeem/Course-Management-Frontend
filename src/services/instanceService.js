// import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/instances';

// export const getAllInstances = async () => {
//     const response = await axios.get(API_URL);
//     return response.data;
// };

// export const createCourseInstance = async (courseInstance) => {
//     const response = await axios.post(API_URL, courseInstance);
//     return response.data;
// };

// // Fetches a specific course instance by year, semester, and courseId
// export const getInstanceByYearSemesterAndId = async (year, semester, courseId) => {
//     const response = await axios.get(`${API_URL}/${year}/${semester}/${courseId}`);
//     return response.data;
// };


import axios from 'axios';

const API_URL = 'http://localhost:8080/api/instances';

export const getInstancesByYearSemesterAndId = async (year, semester, courseId) => {
    const response = await axios.get(`${API_URL}/course-instance`, {
        params: {
            year,
            semester,
            courseId,
        },
    });
    return response.data;
};

export const createCourseInstance = async (courseInstance) => {
    const response = await axios.post(API_URL, courseInstance);
    return response.data;
};

export const deleteCourseInstanceById = async (year, semester, courseId) => {
    await axios.delete(`${API_URL}/${year}/${semester}/${courseId}`);
};
