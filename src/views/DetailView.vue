<template>
    <div class="container">
        <NavbarMenu />
        <div class="row mt-3">
            <div class="col">
                <nav aria-label="breadcrumb ">
                    <ol class="breadcrumb">
                        <router-link to="/" class="breadcrumb-item"><a href="#">Home</a></router-link>
                        <router-link to="/katalog" class="breadcrumb-item"><a href="#">Product</a></router-link>
                        <li class="breadcrumb-item active" aria-current="page">Detail Product</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-5 align-items-center justify-content-center">
                <img :src="'../assets/shop/' + product.gambar" class="py-auto px-auto" alt="" height="450px">
            </div>
            <div class="col-md-7">
                <div class="card">
                    <div class="card-header">
                        <strong>Detail Product</strong>
                    </div>
                    <div class="card-body">
                        <div class="card-title">
                            <h4 class="mt-2 mb-3"><strong>{{ product.nama }}</strong></h4>
                            <h6 class="mt-3 mb-3"><strong>Harga Product</strong> : {{ product.harga }}</h6>
                            <hr>
                            <h6 class="mt-3 mb-2"><strong>Deskripsi</strong> : {{ product.deskripsi }}</h6>
                            <hr>
                        </div>
                        <form v-on:submit.prevent>
                            <div class="form-group mb-3">
                                <label for="jumlah"><strong>Jumlah
                                        Pembelian</strong></label>
                                <input type="number" class="form-control" id="jumlah" aria-describedby="jumlah"
                                    v-model="order.jumlah_order">
                            </div>
                            <div class="form-group">
                                <label for="alamat"><strong>Alamat</strong></label>
                                <textarea v-model="order.alamat_order" type="textarea" class="form-control" id="textarea"
                                    placeholder="Cantumkan alamat anda dengan lengkap" />
                            </div>
                            <div class="d-flex align-items-end flex-column">
                                <button type="submit" class="btn press"
                                    style="border-radius:50px; border:none; color:azure; padding-left:20px; padding-right:20px"
                                    @click="orderan"><b-icon-cart></b-icon-cart>
                                    Pesan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <FooterView />
    </div>
</template>

<script>
import NavbarMenu from '@/components/Navbar.vue';
import FooterView from '@/components/FooterView.vue'
import axios from 'axios';
export default {
    name: 'DetailView',
    components: {
        NavbarMenu,
        FooterView
    },
    data() {
        return {
            product: [],
            order: [],
        };
    },
    methods: {
        setProducts(data) {
            this.product = data;
        },
        orderan() {

            if (this.order.jumlah_order) {
                // this.$router.push({path: "/pesanan"})
                this.order.products = this.product;
                axios
                    .post("http://localhost:3000/pesanans/", this.order)
                    .then(() => {
                        this.$toast.success('Berhasil Masuk Pesanan.', {
                            type: 'success',
                            position: 'top-right',
                            duration: 3000,
                            dissmissible: true
                        })
                    })
                    .catch((err) => console.log(err))
            } else {
                this.$toast.error("Jumlah Pesanan Harus Diisi",
                    {
                        type: 'error',
                        position: 'top-right',
                        duration: 3000,
                        dissmissible: true
                    })
            }
            // this.order.products = this.product;
            // 
            // console.log(this.order)
        }
    },
    mounted() {
        axios.get('http://localhost:3000/products/' + this.$route.params.id)
            .then((response) => this.setProducts(response.data))
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