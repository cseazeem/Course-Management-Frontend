// import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/courses';

// export const getAllCourses = async () => {
//     const response = await axios.get(API_URL);
//     return response.data;
// };

// export const createCourse = async (course) => {
//     const response = await axios.post(API_URL, course);
//     return response.data;
// };

// export const getCourseById = async (id) => {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
// };


import axios from 'axios';

const API_URL = 'http://localhost:8080/api/courses';

export const getAllCourses = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createCourse = async (course) => {
    const response = await axios.post(API_URL, course);
    return response.data;
};

export const getCourseById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const deleteCourseById = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
