<template>
  <div v-if="loading == false" class="home container">
    <h1>Home App</h1>
    <main class="container-products">
      <div class="product" v-for="product in products" :key="product.id">
        <img
          class="product-img"
          :src="product.img"
          :alt="product.img + product.title"
        />
        <h4>{{ product.title }}</h4>
        <p>{{ product.price }}</p>
        <button @click="addBag(product)">Adicionar ao carrinho</button>
      </div>
    </main>
  </div>

  <Loading v-if="loading == true" />
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { api } from "../api.js";
import Loading from "../components/Loading.vue";

export default {
  name: "Home",
  components: {
    Loading,
  },

  setup() {
    const products = reactive([]);
    const store = useStore();
    const loading = ref(false);

    // Chamada a API e retorno da requisição
    loading.value = true;
    api
      .get("/")
      .then((response) => {
        products.push(...response.data);
        loading.value = false;
      })
      .catch((error) => {
        loading.value = false;
        alert("Erro " + error.response.status);
      });

    // Envia o commit com o produto
    const addBag = (product) => {
      store.dispatch("dataProduct", product);
    };

    return { products, addBag, loading };
  },
};
</script>

<style scoped lang="scss">
.home {
  text-align: center;
}
.container-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-top: 20px;
  grid-gap: 30px;

  .product-img {
    height: 200px;
    width: 300px;
  }
  .product {
    box-shadow: 0px 2px 4px rgba(30, 60, 90, 0.2);
    padding-bottom: 20px;
  }
}
@media (max-width: 690px) {
  .container-products {
    grid-template-columns: 1fr;
    padding: 20px;
  }
}
</style>
