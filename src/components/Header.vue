<template>
  <div>
    <div class="header">
      <a-icon type="left" @click="linkToPartA" />
      <span>{{title}}</span>
      <a-icon type="mail" :style="{opacity: isPartB}" />
    </div>
    <a-menu mode="horizontal" class="menu" @click="link" v-model="current">
      <a-menu-item key="partA"> 
        <a-icon type="mail" :style="{ fontSize: '1.3rem' }"/>
      </a-menu-item>
      <a-menu-item key="plan">
         <a-icon type="appstore" :style="{ fontSize: '1.3rem' }" />
      </a-menu-item>
      <a-menu-item key="partB">
        <a-icon type="mail" :style="{ fontSize: '1.3rem' }" />
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name:'Header',
  data () {
    return {
      title:'title',
      current: ['partA']
    }
  },
  computed:{
    isPartB() {
      return this.$route.path.includes('partB') ? 1 : 0.8
    }
  },
  methods: {
    link({item,key,keyPath}) {
      console.log(item,key,keyPath)
      const name = key[0].toUpperCase() + key.slice(1)
      this.$router.push({
        name
      })
    },
    linkToPartA() {
      this.$router.push({
        name:"PartA"
      })
      this.current = ['partA']
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '../theme/var.scss';
  @mixin flex-style {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header{
    @include flex-style;
    height: (120rem/40);
    padding: 1rem;
    font-size: 1.1rem;
    span {
      color: $--color-title;
      font-weight: bolder;
    }
  }
  .menu {
    margin-top: 0.4rem;
    @include flex-style;
    .ant-menu-item {
      flex: 1;
      text-align: center;
    }
  }
</style>
