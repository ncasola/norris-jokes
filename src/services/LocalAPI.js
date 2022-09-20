export default {
    /**
     * @description - This method gets all the jokes from the local storage
     * @returns {object} - Returns an array of jokes
    */
    async getJokes() {
        // get jokes from local storage
        if (localStorage.getItem('jokes')) {
            const jokes = JSON.parse(localStorage.getItem('jokes'));
            return jokes;
        } else{
            localStorage.setItem('jokes', JSON.stringify([]));
            return [];
        }
    },
    /**
     * @description - This method saves a joke to the local storage
     * @param {object} joke - The joke object
     */
    async saveJoke(joke) {
        // get jokes from local storage
        const jokes = JSON.parse(localStorage.getItem('jokes'));
        // add new joke
        jokes.push(joke);
        // save jokes to local storage
        localStorage.setItem('jokes', JSON.stringify(jokes));
    },
    /**
     * @description - This method deletes a joke from the local storage
     * @param {object} joke - The joke object
    */
    async deleteJoke(id) {
        // get jokes from local storage
        const jokes = JSON.parse(localStorage.getItem('jokes'));
        // remove joke
        const newJokes = jokes.filter(joke => joke.id !== id);
        // save jokes to local storage
        localStorage.setItem('jokes', JSON.stringify(newJokes));
    }
};