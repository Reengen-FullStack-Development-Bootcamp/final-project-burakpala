<template>
  <div id="addForm">
    <form @submit.prevent="handleAdd">
      <div class="form-group">
        <label for="id">Factory Name</label>
        <input v-model="product.id" type="text" class="form-control" id="id" />
      </div>
      <div class="form-group">
        <label for="categoryId">Membership Date</label>
        <input
          v-model="product.categoryId"
          type="text"
          class="form-control"
          id="id"
        />
      </div>
      <div class="form-group">
        <label for="productName">Membership End</label>
        <input
          v-model="product.productName"
          type="text"
          class="form-control"
          id="id"
        />
      </div>
      <div class="form-group">
        <label for="quantityPerUnit">Persons</label>
        <input
          v-model="product.quantityPerUnit"
          type="text"
          class="form-control"
          id="id"
        />
      </div>
      <div class="form-group">
        <label for="unitPrice">Special Membership</label>
        <input
          v-model="product.unitPrice"
          type="text"
          class="form-control"
          id="id"
        />
      </div>

      <button type="submit" class="btn btn-sm btn-success">Add</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "product-add",
  data() {
    return {
      product: {
        id: "",
        categoryId: "",
        productName: "",
        quantityPerUnit: "",
        unitPrice: "",
        unitsInStock: "",
      },
    };
  },
  methods: {
    handleAdd() {
      this.$emit("add:product", this.product);
    },
  },
};
</script>
<style scoped>
#addForm {
  margin: 100px;
}
</style>