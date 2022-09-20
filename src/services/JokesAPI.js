import axios from 'axios';
/**
 * @description - This is a service class that handles all the API calls
*/

/**
 * @description - Axios instance
 * @returns {object} - Axios instance
 */
const api = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes',
});


export default {
/**
    * @description - This method gets a random joke from the API
    * @param {string} category - The category of the joke
    * @returns {object} - The joke object
    */
    async getJoke(category) {
        const response = await api.get(`/random?category=${category}`);
        return response.data;
    },
/**
    * @description - This method gets all the categories from the API
    * @returns {object} - Returns an array of categories
*/
    async getCategories() {
        const response = await api.get('/categories');
        return response.data;
    }
};
