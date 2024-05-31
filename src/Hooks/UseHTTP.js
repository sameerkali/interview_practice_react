import { useState } from 'react';
import axios from 'axios';

const UseHTTP = () => {
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  const postData = async (url, body) => {
    const response = await axios.post(url, body);
    return response.data;
    
  };

  const patchData = async (url, body) => {
    const response = await axios.patch(url, body);
    return response.data;
  };

  const deleteData = async (url) => {
    await axios.delete(url);
  };

  const getAllData = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  return { error, fetchData, postData, patchData, deleteData, getAllData };
};

export default UseHTTP;
