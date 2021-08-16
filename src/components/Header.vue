<template>
  <header>
    <nav class="container">
      <router-link to="/">
        <img src="../assets/logo.png" class="logo" alt="Logo" />
      </router-link>

      <router-link class="bag" to="/bag">
        <img src="../assets/bag.svg" title="Go to bag" alt="Bag" />
        <span>{{ stateQuant }}</span>
      </router-link>
    </nav>
  </header>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  name: "Header",

  setup() {
    const store = useStore();
    const stateQuant = computed(() => {
      return store.state.bag.length;
    });

    return { stateQuant };
  },
};
</script>

<style scoped lang="scss">
header {
  position: sticky;
  background: #fff;
  top: 0px;
  width: 100%;
}
nav {
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;

  .logo {
    width: 120px;
  }

  .bag {
    position: relative;

    span {
      background: #5e4;
      padding: 2px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: -10px;
    }
  }
}

@media (max-width: 965px) {
  nav {
    padding: 20px;
  }
}
</style>
