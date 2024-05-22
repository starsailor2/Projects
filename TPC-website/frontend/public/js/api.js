import axios from 'axios';

// Set the base URL for your API
const API_URL = 'http://localhost:5000/api';

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

// Login user
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, userData);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

// Get student profile
export const getStudentProfile = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/students/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching student profile:", error);
        throw error;
    }
};

// Other API calls...
