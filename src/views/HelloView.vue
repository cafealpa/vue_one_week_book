<template>
  <div class="about">
    <h1>Hello, {{ title }}!</h1>
    <h1 v-html="htmlString"></h1>
    <img :src="imgsrc"/>
    <br>
    <button :disabled="btnCntVal">눌러</button>
    <br>
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

    <div>
      <h3>5.3 이벤트 처리(v-on)</h3>
      <button type="button" @click="increaseCnt">카운트 증가</button>
      <button type="button" @click="decreaseCnt">카운트 감소</button>
      <p>The count is : {{ counter }}</p>
    </div>

    <div>
      <select v-model="selectedValue" @change="changeSelect">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <p>selected value is {{selectedValue}}</p>
    </div>

    <div>
      <input type="text" v-model="searchKey" @keyup.enter="enterAction">
    </div>

    <div>
      <input type="text" v-model="firstName">
      <input type="text" v-model="lastName">
      <p>Full Name : {{fullName}}</p>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'world!',
      htmlString: `<div>Hello World!</div>`,
      imgsrc: 'https://www.pcworld.com/wp-content/uploads/2023/08/Lead-1.jpg?resize=1024%2C768&quality=50&strip=all',
      btnCntVal: true,
      productList: [
        {
          productName: '기계식 키보드',
          price: 75000,
          deliveryPrice: 2500,
        },
        {
          productName: '마우스',
          price: 25000,
          deliveryPrice: 2500,
        },
        {
          productName: '무선 충전기',
          price: 26000,
          deliveryPrice: 3000,
        }
      ],
      counter: 0,
      selectedValue: 1,
      searchKey: '',
      firstName : 'NamHyoung',
      lastName : 'Cho',
    }
  },
  methods: {
    increaseCnt() {
      this.counter++;
    },
    decreaseCnt() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
    changeSelect() {
      console.log(this.selectedValue);
    },
    enterAction() {
      console.log(this.searchKey);
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
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