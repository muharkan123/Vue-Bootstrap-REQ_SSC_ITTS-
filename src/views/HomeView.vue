<template>
  <div class="home">
    <NavbarMenu />
    <HomeComp />
    <FooterView/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarMenu from '@/components/Navbar.vue'
import HomeComp from '@/components/HomeComp.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  name: 'HomeView',
  components: {
    NavbarMenu,
    HomeComp,
    FooterView
  },
}
</script>
