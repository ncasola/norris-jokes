<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Chuck Norris Jokes</h1>
        <SelectorJoke/>
        <hr>
        <ListJoke/>
      </div>
    </div>
  </div>
</template>

<script>
import ListJoke from './ListJoke.vue';
import SelectorJoke from './SelectorJoke.vue';
  /**
   * Home component to display the list of jokes and the selector
   * @displayName Home
   */
export default {
  name: 'Home',
  components: {
    /**
     * List of jokes
     */
    ListJoke,
    /**
     * Selector of jokes
     */
    SelectorJoke
  }
}
</script>
