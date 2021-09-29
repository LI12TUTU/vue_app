<template>
  <a-layout>
    <a-layout-header>
      <Header></Header>
    </a-layout-header>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script>
  import Header from '../components/Header'
export default {
  data () {
    return {}
  },
  methods: {},
  components: {
    Header
  }
}
</script>

<style scoped>
  @import '../theme/var.scss';  
  section{    
    height: 100%;
  }
  header{
    padding: 0 !important;
    height: auto !important;
    background-color: #fff !important;
  }
  main{
    background-color: #f9f9f9;
  }
</style>
