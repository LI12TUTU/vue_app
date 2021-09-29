<template>
  <div id="app" class="clearfix">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
  }
</script>

<style>
  .clearfix::before,
  .clearfix::after {
    content: '';
    display: table;
    clear: both;
  }
</style>
