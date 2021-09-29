<template>
  <a-spin :spinning="spinning" size="large" tip="Submitting...">
    <a-layout>
      <a-layout-header>
        <Header @loading="load"></Header>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
        <!-- <keep-alive></keep-alive>       -->
      </a-layout-content>
    </a-layout>
  </a-spin>
</template>

<script>
  import Header from '../components/Header'
  export default {
    data () {
      return {
        spinning: false,
      }
    },
    methods: {
      load() {
        this.spinning = true
        setTimeout(() => {
          this.spinning = false
        } , 3000)
      }
    },
    components: {
      Header
    }
  }
</script>

<style lang="scss" scoped>  
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
    height: 100%;
  } 
  .ant-spin-nested-loading {
    background-color: #2e3140;
  }
  .ant-spin-nested-loading,
  .ant-spin-nested-loading ::v-deep .ant-spin-container{
    height: 100% !important;
  }
  .ant-spin-nested-loading ::v-deep .ant-spin {
    max-height: 100vh !important;
    color: white;
    font-size: 15px;
  }
  .ant-spin-nested-loading ::v-deep .ant-spin i {
    background: white;
  }
</style>
