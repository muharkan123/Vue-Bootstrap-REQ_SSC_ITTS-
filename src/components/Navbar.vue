<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light d-flex">
      <a class="navbar-brand mr-auto" href="#"><img src="../assets/logo.png" alt="logo" width="150px"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" style="color:#655DBB">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/katalog" style="color:#655DBB">Katalog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/pesanan" style="color:#655DBB">Pesanan</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>


  <!-- <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container ">
        <b-navbar-brand href="#"> <img src="../assets/logo.png" alt="logo" width="150px"> </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="d-flex flex-row-reverse" is-nav>
          <b-navbar-nav>
            <div class="nav-item">
              <router-link class="nav-link" to="/" style="color:#655DBB">Home</router-link>
            </div>
            <div class="nav-item">
              <router-link class="nav-link" to="/katalog" style="color:#655DBB">Katalog</router-link>
            </div>
            <div class="nav-item">
              <router-link class="nav-link" to="/pesanan" style="color:#655DBB">Pesanan</router-link>
            </div>
            <div class="nav-item">
              <router-link class="nav-link" to="/about" style="color:#655DBB">About</router-link>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div> -->
</template>

<script>
export default {
  name: 'NavbarMenu'
}
</script>

<style></style>