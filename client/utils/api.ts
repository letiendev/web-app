// API Base URL
const API_BASE_URL = '/api';

// Request interceptor to add auth token
export const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> => {
  const token = localStorage.getItem('token');
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, config);
    
    // Handle 401 unauthorized - redirect to login
    if (response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
      throw new Error('Unauthorized');
    }
    
    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Convenience methods
export const api = {
  get: (endpoint: string, options?: RequestInit) =>
    apiRequest(endpoint, { method: 'GET', ...options }),
    
  post: (endpoint: string, data?: any, options?: RequestInit) =>
    apiRequest(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    }),
    
  put: (endpoint: string, data?: any, options?: RequestInit) =>
    apiRequest(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    }),
    
  delete: (endpoint: string, options?: RequestInit) =>
    apiRequest(endpoint, { method: 'DELETE', ...options }),
};

export default api;
