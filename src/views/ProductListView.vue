<template>
  <div>
    <h1>Product List</h1>
    <table>
      <thead>
      <tr>
        <th></th>
        <th>제품명</th>
        <th>가격</th>
        <th>배송료</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="i" v-for="(product, i) in productList">
        <td>{{ i + 1 }}</td>
        <td>{{ product.productName }}</td>
        <td>{{ product.price.toLocaleString() }}</td>
        <td>{{ product.deliveryPrice.toLocaleString() }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList : []
    }
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      // const response = await this.$api('/api/product/list','GET');
      // this.productList = response.data;
      this.productList = await this.$api('/api/product/list','GET');
    }
  }
}
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>