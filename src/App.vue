<template>
  <div class="container bg-pattern">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        <span class="fs-4 ms-3">Chuck Norris API</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
      </ul>
    </header>
    <Home/>
  </div>

</template>

<script>
import Home from './components/Home.vue'
/**
 * Main component to display the home component
 * @displayName Main
 */
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
body {
  background-color: #e5e5f7;
  opacity: 0.8;
  background-image:  linear-gradient(135deg, #ffffff 25%, transparent 25%), linear-gradient(225deg, #ffffff 25%, transparent 25%), linear-gradient(45deg, #ffffff 25%, transparent 25%), linear-gradient(315deg, #ffffff 25%, #e5e5f7 25%);
  background-position:  26px 0, 26px 0, 0 0, 0 0;
  background-size: 26px 26px;
  background-repeat: repeat;
}
.bg-pattern {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
}
</style>
