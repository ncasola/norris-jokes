<template>
    <ul class="list-group list-group-numbered list-group-flush">
        <div v-if="loading" class="spinner-border text-primary" role="status"></div>
        <li class="list-group-item" v-for="joke in jokes" :key="joke.id">
            {{joke.value}}
            <span class="badge bg-danger rounded-pill" @click="removeJoke(joke.id)">X</span>
        </li>
    </ul>
</template>

<script>
import JokeStore from '../stores/JokeStore';
  /**
   * List component to display the jokes
   * @displayName List of Jokes
   */
export default {
    name: 'ListJoke',
    methods: {
          /**
           * Gets called when a joke is removed
           */
        removeJoke(jokeId) {
            JokeStore.dispatch('deleteJoke', jokeId);
        }
    },
    computed: {
          /**
           * Array of jokes
           */
        jokes() {
            return JokeStore.state.jokes;
        },
          /**
           * Boolean to know if the jokes are loading
           */
        loading() {
            return JokeStore.state.loading;
        }
    },
      /**
       * Gets called when the component is created and gets the jokes stored in the local storage
       */
    created() {
        JokeStore.dispatch('getJokes');
    }
  }
</script>