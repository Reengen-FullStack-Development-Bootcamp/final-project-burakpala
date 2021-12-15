<template>
  <div id="app">
    <FactoryList
      @delete:product="deleteProduct"
      @update:product="updateProduct"
      :products="products"
    />
    <FactoryAdd @add:product="addProduct" />
  </div>
</template>

<script>
import FactoryList from "../components/FactoryList.vue";
import FactoryAdd from "../components/FactoryAdd.vue";
export default {
  name: "App",
  components: {
    FactoryList,
    FactoryAdd,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          productName: "Laptop",
          categoryId: "MacbookAir",
          quantityPerUnit: "New Generation",
          unitPrice: "1000$",
          unitsInStock: 10,
        },
        {
          id: 2,
          productName: "Parfume",
          categoryId: "Dior Sauvage",
          quantityPerUnit: "Best Parfume Ever",
          unitPrice: "60$",
          unitsInStock: 8,
        },
        {
          id: 3,
          productName: "Food",
          categoryId: "Cake",
          quantityPerUnit: "Mini Cake",
          unitPrice: "1.5$",
          unitsInStock: 55,
        },
      ],
    };
  },
  methods: {
    deleteProduct(product) {
      this.products = this.products.filter(
        (productToFilter) => productToFilter.id !== product.id
      );
    },
    updateProduct() {},
    addProduct(product) {
      const newProduct = { ...product };
      this.products = [...this.products, newProduct];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>