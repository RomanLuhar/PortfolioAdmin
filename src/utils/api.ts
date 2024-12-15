const API_BASE_URL = 'http://localhost:3000/api';

export const postData = async (url: string, data: object) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.ok ? response.json() : null;
};

export const getData = async (url: string) => {
  const response = await fetch(`${API_BASE_URL}${url}`);
  return response.ok ? response.json() : null;
};

export const putData = async (url: string, data: object) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log('API put error:', error);
    throw error;
  }
};

export const getDataById = async (endpoint: string, id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}/${id}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log('API fetch error:', error);
    throw error;
  }
};


export const deleteData = async (url: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, { 
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Delete request failed:', error);
    return null;
  }
};

