<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },

  setup() {},
};
</script>

<style lang="scss">
.container {
  max-width: 960px;
  margin: 0 auto;
}

// Reset styles
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Public Sans", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
}

img {
  max-width: 100%;
  display: block;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

//---------------------------------------

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
