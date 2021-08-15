<template>
  <header class="container">
    <router-link to="/">
      <img src="../assets/logo.png" class="logo" alt="Logo" />
    </router-link>

    <router-link to="/bag">
      <img src="../assets/bag.svg" title="Go to bag" alt="Bag" />
    </router-link>
  </header>
</template>

<script>
export default {
  name: "Header",

  setup() {
    const quantityBag = "ok";

    return { quantityBag };
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;
}

.logo {
  width: 120px;
}

@media (max-width: 965px) {
  header {
    padding: 20px;
  }
}
</style>
