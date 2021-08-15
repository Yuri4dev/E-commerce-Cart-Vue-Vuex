<template>
  <div class="container">
    <h1 style="text-align:center;">Carrinho</h1>
    <table class="container" border="1">
      <thead>
        <tr>
          <th>Items</th>
          <th scope="col">Quant</th>
          <th scope="col">Subtotal</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody v-for="product in bag" :key="product.id">
        <tr>
          <th scope="row">
            {{ product.title }}
            <img :src="product.img" alt="Foto do produto" />
          </th>
          <td>
            <img src="../assets/up.svg" alt="Aumentar quantidade" />
            {{ (product.quantity = 1) }}
            <img src="../assets/down.svg" alt="Diminuir quantidade" />
          </td>
          <td>R$ {{ product.price }}</td>
          <td>
            <img src="../assets/trash.svg" alt="Excluir produto" />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Totals</th>
          <th>21,000</th>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Bag",

  setup() {
    const local = JSON.parse(localStorage.getItem("Products"));
    const bag = reactive(local);

    console.log(bag);

    return { local, bag };
  },
};
</script>

<style scoped lang="scss">
table {
  img {
    max-width: 100px;
    object-fit: cover;
  }
}

table {
  border-collapse: collapse;

  td,
  th {
    text-align: center;
    padding: 5px 10px;
  }
  td {
    img {
      margin: 5px auto;
    }
  }
}
</style>
