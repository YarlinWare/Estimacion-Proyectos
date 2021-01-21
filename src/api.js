const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  desserts: {
    list() {
        // return []; // Cuando no hay elementos
        // throw new Error('Not found') // Error
        // throw new Error('500: Server Error') // Error server
        return callApi('/desserts');// Cuando hay elementos
    },
    create(dessert) {
      // throw new Error('500: Server Error') // Error server
      return callApi(`/desserts`, {
        method: 'POST',
        body: JSON.stringify(dessert),
      });
    },
    read(dessertId) {
      return callApi(`/desserts/${dessertId}`);
    },
    update(dessertId, updates) {
      return callApi(`/desserts/${dessertId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(dessertId) {
      return callApi(`/desserts/${dessertId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;