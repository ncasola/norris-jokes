<template>  
    <div class="form-group">
        <label for="categorieSelect" class="form-label">Choose a categorie:</label>
        <select class="form-control form-select-lg mb-3" id="categorieSelect" @change="addNewJoke($event)">
            <option v-for="item in categories" :key="item" :value="item">{{item}}</option>
        </select>
    </div>
</template>
<script>
import JokeStore from '../stores/JokeStore';
  /**
   * Select component to choose a categorie
   * @displayName Selector of Jokes
   */
export default {
    name: 'SelectorJoke',
    computed: {
        /**
        * Array of categories
        */
        categories() {
            return JokeStore.state.categories;
        }
    },
    methods: {
        /**
        * Gets called when a categorie is selected
        */
        async addNewJoke(event) {
            let category = event.target.value;
            JokeStore.dispatch('saveJoke', category);
        }
    },
        /**
        * Gets called when the component is created and gets the categories
        */
    created() {
        JokeStore.dispatch('getCategories');
    }
}
</script>