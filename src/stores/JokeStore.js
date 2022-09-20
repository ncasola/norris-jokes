import { createStore } from 'vuex'
import LocalAPI from '../services/LocalAPI'
import JokesAPI from '../services/JokesAPI'

export default createStore({
    /**
     * @description - This is the state of the application
     * @returns {object} - The state object
     * @property {array} jokes - The array of jokes
     * @property {array} categories - The array of categories
     * @property {boolean} loading - The loading state
     * @property {boolean} error - The error state
     */
    state: {
        jokes: [],
        categories: [],
        loading: false,
        error: false,
    },
    /**
     * @description - This is the mutations of the application
     * @returns {object} - The mutations object
     * @property {function} setJokes - This method sets the jokes
     * @property {function} setCategories - This method sets the categories
     * @property {function} setLoading - This method sets the loading state
     * @property {function} setError - This method sets the error state
    */
    mutations: {
        setJokes(state, jokes) {
            state.jokes = jokes;
        },
        setCategories(state, categories) {
            state.categories = categories;
        },
        setLoading(state, loading) {
            state.loading = loading;
        },
        setError(state, error) {
            state.error = error;
        },
    },
    /**
     * @description - This is the actions of the application
     * @returns {object} - The actions object
     * @property {function} getJokes - This method gets the jokes
     * @property {function} getCategories - This method gets the categories
     * @property {function} saveJoke - This method saves a joke
     * @property {function} deleteJoke - This method deletes a joke
    */
    actions: {
        /**
         * @description - This method gets the jokes from the local storage
         * @param {object} context - The context object
         * @property {function} commit - This method commits a mutation
         * @property {function} dispatch - This method dispatches an action
         * @property {function} setLoading - This method sets the loading state
         * @property {function} setError - This method sets the error state
         */
        async getJokes({ commit }) {
            commit('setLoading', true);
            commit('setError', false);
            try {
                const jokes = await LocalAPI.getJokes();
                commit('setJokes', jokes);
            }
            catch (e) {
                commit('setError', true);
            }
            finally {
                commit('setLoading', false);
            }
        },
        /**
         * @description - This method gets the categories from the API
         * @param {object} context - The context object
         * @property {function} commit - This method commits a mutation
         * @property {function} dispatch - This method dispatches an action
         * @property {function} setLoading - This method sets the loading state
         * @property {function} setError - This method sets the error state
         * @property {function} setCategories - This method sets the categories
        */
        async getCategories({ commit }) {
            commit('setLoading', true);
            commit('setError', false);
            try {
                const categories = await JokesAPI.getCategories();
                commit('setCategories', categories);
            }
            catch (e) {
                commit('setError', true);
            }
            finally {
                commit('setLoading', false);
            }
        },
        /**
         * @description - This method get a new joke from the API and saves it to the local storage
         * @param {object} context - The context object
         * @property {function} commit - This method commits a mutation
         * @property {function} dispatch - This method dispatches an action
         * @property {function} setLoading - This method sets the loading state
         * @property {function} setError - This method sets the error state
         * @property {function} setJokes - This method sets the jokes
         * @param {object} newJoke - The new joke object
         */
        async saveJoke({ commit, state }, category) {
            commit('setLoading', true);
            commit('setError', false);
            try {
                let newJoke = await JokesAPI.getJoke(category);
                console.log(newJoke);
                await LocalAPI.saveJoke(newJoke);
                commit('setJokes', [...state.jokes, newJoke]);
            }
            catch (e) {
                commit('setError', true);
            }
            finally {
                commit('setLoading', false);
            }
        },
        /**
         * @description - This method deletes a joke from the local storage
         * @param {object} context - The context object
         * @property {function} commit - This method commits a mutation
         * @property {function} dispatch - This method dispatches an action
         * @property {function} setLoading - This method sets the loading state
         * @property {function} setError - This method sets the error state
         * @property {function} setJokes - This method sets the jokes
         * @param {object} id - The id of the joke to delete
         */
        async deleteJoke({ commit }, id) {
            commit('setLoading', true);
            commit('setError', false);
            try {
                await LocalAPI.deleteJoke(id);
                const jokes = await LocalAPI.getJokes();
                commit('setJokes', jokes);
            }
            catch (e) {
                commit('setError', true);
            }
            finally {
                commit('setLoading', false);
            }
        },
    },
    /**
     * @description - This is the getters of the application
     * @returns {object} - The getters object
     * @property {function} jokes - This method gets the jokes
     * @property {function} categories - This method gets the categories
     * @property {function} loading - This method gets the loading state
     * @property {function} error - This method gets the error state
    */
    getters: {
        jokes: state => state.jokes,
        categories: state => state.categories,
        loading: state => state.loading,
        error: state => state.error,
    },
})