<template>
    <div class="container mt-4">
        <!-- Desktop -->
        <div class="d-none d-md-block">
            <div class="row d-flex justify-content-center" height="600px">
                <div class="col-md-6">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                            <h3>Katalog Terlaris Mingguan</h3>
                            <h4>Nikmati Promonya dan Voucher Gratisnya</h4>
                            <p class="text-justify">Belanja Puas Dengan Harga Hemat
                            </p>
                            <button type="button" class="btn press"
                                style="border-radius:50px; border:none; color:azure; padding-left:20px; padding-right:20px"><b-icon-arrow-right></b-icon-arrow-right>
                                View More</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="../assets/illus.svg" alt="" width="100%">
                </div>
            </div>
        </div>

        <!-- Mobile View -->
        <div class="d-sm-block d-md-none mt-4">
            <div class="row mt-4 d-sm-block d-md-none d-flex justify-content-center" height="600px">
                <div class="col-md-6 mb-5 mt-5">
                    <img src="../assets/illus.svg" alt="" width="100%">
                </div>
                <div class="col-md-6 mt-4">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                            <h3>Katalog Terlaris Mingguan</h3>
                            <h4>Nikmati Promonya dan Voucher Gratisnya</h4>
                            <p class="text-justify">Belanja Puas Dengan Harga Hemat
                            </p>
                            <router-link to="/katalog" type="button" class="btn press"
                                style="border-radius:50px; border:none; color:azure; padding-left:20px; padding-right:20px"><b-icon-arrow-down></b-icon-arrow-down>
                                Lihat Katalog</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5">

        </div>
        <!-- Desktop -->
        <div class="row">
            <div class="col">
                <h2><strong>Best </strong>Seller</h2>
            </div>
            <div class="col">
                <router-link to="/katalog" type="button" class="tomb btn float-right"
                    style="border-radius:50px; border:1px solid black; border-color:#655DBB ; color:#655DBB; padding-left:20px; padding-right:20px"><b-icon-eye></b-icon-eye>
                    Lihat Katalog</router-link>
            </div>
        </div>
        <div class="mt-3">

        </div>
        <div class="row align-self-center justify-content-center">
            <div class="col-md-4 mb-4  col-sm-6 w-75 mw-80" v-for="product in bproducts" :key="product.id">
                <div class="card shadow kard ">
                    <img :src="'assets/shop/' + product.gambar" class="card-img-top poto" width="80%" height="300px">
                    <div class="card-body">
                        <h5 class="card-title"> {{ product.nama }}</h5>
                        <p class="card-text">{{product.deskripsi}}</p>
                        <router-link :to="'/katalog'+product.id" type="button" class="btn press"
                            style="border-radius:50px; border:none; color:azure; padding-left:20px; padding-right:20px"><b-icon-cart></b-icon-cart>
                            View More</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'HomeComp',
    components: {
    },
    data() {
        return {
            bproducts: [],
        };
    },
    methods: {
        setProducts(data) {
            this.bproducts = data;
        }
    },
    mounted() {
        axios.get('http://localhost:3000/best-products')
            .then((response) => this.setProducts(response.data))
            .catch((error) => console.log('Gagal : ', error))
    }
}
</script>

<style></style>