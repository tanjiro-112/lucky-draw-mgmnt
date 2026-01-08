import mockAdapter from './adapters/mock';

const VITE_API_MODE = import.meta.env.VITE_API_MODE || 'mock';

const adapters = {
  mock: mockAdapter,
};

const adapter = adapters[VITE_API_MODE];

const handleResponse = async (request) => {
  try {
    const response = await request;
    if (response.status !== 200) {
      throw new Error(response.errorMessage || 'An unknown error occurred');
    }
    return response.jcJson;
  } catch (error) {
    console.error('API Request Failed:', error);
    throw error;
  }
};

const client = {
  getEvents: (...args) => handleResponse(adapter.getEvents(...args)),
  createEvent: (...args) => handleResponse(adapter.createEvent(...args)),
  getPrizes: (...args) => handleResponse(adapter.getPrizes(...args)),
  createPrize: (...args) => handleResponse(adapter.createPrize(...args)),
};

export default client;
