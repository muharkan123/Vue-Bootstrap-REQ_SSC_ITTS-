<template>
    <div class="pesanan">
        <NavbarMenu />
        <div class="container">
            <div class="row mt-4">
                <div class="col">
                    <h2><strong>Daftar </strong>Pesanan</h2>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col">
                    <nav aria-label="breadcrumb ">
                        <ol class="breadcrumb">
                            <router-link to="/" class="breadcrumb-item"><a href="#">Home</a></router-link>
                            <router-link to="/katalog" class="breadcrumb-item"><a href="#">Product</a></router-link>
                            <li class="breadcrumb-item active" aria-current="page">Pesanan</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class=" container mb-4 ">
                <table class="table align-self-center">
                    <thead>
                        <tr>
                            <th scope="col">Nomor</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Jumlah</th>
                            <th scope="col">Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pesana, index) in pesanans" :key="pesana.id">
                            <th scope="row">{{ index + 1 }}</th>
                            <td><img :src="'assets/shop/' + pesana.gambar" class="img-fluid img-thumbnail" width="40%"
                                    height="70%">
                            </td>
                            <td>{{ pesana.jumlah }}</td>
                            <td> <strong>{{ pesana.harga }}</strong></td>
                        </tr>
                        <tr>
                            <td colspan="3" align="right">
                                <strong>Total Harga : </strong>
                            </td>
                            <td align="right">
                                <strong>Rp500.000</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <FooterView />
    </div>
</template>
  
<script>
import NavbarMenu from '@/components/Navbar.vue';
import FooterView from '@/components/FooterView.vue';
import axios from 'axios';
export default {
    name: 'PesananView',
    components: {
        NavbarMenu,
        FooterView,
    },
    data() {
        return {
            pesanans: [],
        };
    },
    methods: {
        setPesanans(data) {
            this.pesanans = data;
        }
    },
    mounted() {
        axios.get('http://localhost:3000/pesanans')
            .then((response) => this.setPesanans(response.data))
            .catch((error) => console.log('Gagal : ', error))
    }
}
</script>
  
<style scoped>
.breadcrumb {
    background-color: transparent;
}

.breadcrumb-item.active {
    color: blueviolet;
}

.breadcrumb-item a {
    color: gray;
}
</style>