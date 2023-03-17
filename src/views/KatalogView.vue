<template>
  <div class="katalog">
    <NavbarMenu />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2><strong>Daftar </strong>Katalog</h2>
        </div>
      </div>

      <div class="input-group mt-4 mb-3">
        <input 
        v-model="search"
        type="text" class="form-control" placeholder="Search" aria-label="Recipient's username"
          aria-describedby="basic-addon2" 
          @keyup="searchingProduct">
        <span class="input-group-text" id="basic-addon2">
          <b-icon-search></b-icon-search>
        </span>
      </div>


      <div class="row mt-2 mb-4">
        <div class="col-md-3 mt-4 mb-4" v-for="product in bproducts" :key="product.id">
          <div class="card shadow kard ">
            <img :src="'assets/shop/' + product.gambar" class="card-img-top poto" width="80%" height="300px">
            <div class="card-body">
              <h5 class="card-title"> {{ product.nama }}</h5>
              <p class="card-text">{{ product.deskripsi }}</p>
              <router-link :to="'/katalog'+product.id" type="button" class="btn press"
                style="border-radius:50px; border:none; color:azure; padding-left:20px; padding-right:20px"><b-icon-cart></b-icon-cart>
                View More</router-link>
            </div>
          </div>
        </div>
      </div>
      <FooterView/>
    </div>
  </div>
</template>

<script>
import NavbarMenu from '@/components/Navbar.vue';
import FooterView from '@/components/FooterView.vue'
import axios from 'axios';
export default {
  name: 'KatalogView',
  components: {
    NavbarMenu,
    FooterView
  },
  data() {
    return {
      bproducts: [],
      search: '',
    };
  },
  methods: {
    setProducts(data) {
      this.bproducts = data;
    },
    searchingProduct() {
      axios.get('http://localhost:3000/products?q=' + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log('Gagal : ', error))
    }
  },
  mounted() {
    axios.get('http://localhost:3000/products')
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log('Gagal : ', error))
  }
}
</script>

<style></style>