// axios.js

import axios from 'axios';

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.imageUrl; // Adjust this based on your server's response structure
  } catch (error) {
    throw error;
  }
};

export const makeRequest = axios.create({
  baseURL: 'http://localhost:8800/api/auth/',
  withCredentials: true,
});
