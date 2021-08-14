<template>
  <div v-if="loading == false" class="home container">
    <h1>Home App</h1>
    <main class="container-produtos">
      <div class="produto" v-for="produto in produtos" :key="produto.id">
        <img :src="produto.img" :alt="produto.img + produto.title" />
        <h4>{{ produto.title }}</h4>
        <p>{{ produto.price }}</p>
        <button @click="addBag(produto)">Adicionar ao carrinho</button>
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
    const produtos = reactive([]);
    const store = useStore();
    const loading = ref(false);

    // Chamada a API e retorno da requisição
    loading.value = true;
    api
      .get("/")
      .then((response) => {
        produtos.push(...response.data);
        loading.value = false;
      })
      .catch((error) => {
        loading.value = false;
        alert("Erro " + error.response.status);
      });

    // Envia o commit com o produto
    const addBag = (produto) => {
      store.dispatch("dataProduct", produto);
      console.log(produto);
    };

    return { produtos, addBag, loading };
  },
};
</script>

<style scoped lang="scss">
.home {
  text-align: center;
}
.container-produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-top: 20px;
  grid-gap: 30px;

  img {
    height: 200px;
    width: 300px;
  }
  .produto {
    box-shadow: 0px 2px 4px rgba(30, 60, 90, 0.2);
    padding-bottom: 20px;
  }
}
@media (max-width: 690px) {
  .container-produtos {
    grid-template-columns: 1fr;
    padding: 20px;
  }
}
</style>
