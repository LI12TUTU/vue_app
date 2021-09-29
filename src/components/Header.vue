<template>
  <div>
    <div class="header">
      <a-icon type="left" @click="linkToPartA" />
      <span>{{title}}</span>
      <svg 
        class="icon" aria-hidden="true" :style="{opacity: isPartB}"
        @click="load"
      >
        <use xlink:href="#icon-paperplane-fill"></use>
      </svg>
    </div>
    <a-menu mode="horizontal" class="menu" @click="link" v-model="current">
      <a-menu-item key="partA"> 
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-book"></use>
        </svg>
      </a-menu-item>
      <a-menu-item key="plan">
         <a-icon type="appstore" :style="{ fontSize: '1.3rem' }" />
      </a-menu-item>
      <a-menu-item key="partB">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-book"></use>
        </svg>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
  import '../icon/iconfont.js'
export default {
  name:'Header',
  data () {
    return {
    }
  },
  computed:{
    isPartB() {
      return this.$route.path.includes('partB') ? 1 : 0.8
    },
    title() {
      if(this.$route.path.includes('partA')) {
        return 'John Report - Part A'
      }else if(this.$route.path.includes('plan')) {
        return 'Floor Plan'
      }else {
        return 'John Report - Part B'
      }
    },
    current: {
      get() {
        if(this.$route.path.includes('partA')) {
          return ['partA']
        }else if(this.$route.path.includes('plan')) {
          return ['plan']
        }else {
          return ['partB']
        }
      },
      set() {
        return
      }
    }
  },
  methods: {
    link({key}) {
      // console.log(item,key,keyPath)
      // const name = key[0].toUpperCase() + key.slice(1)
      // this.$router.push({
      //   name
      // })
      if(key.includes('partA')){
        this.$router.push({
            name:'PartA'
        })
      }
    },
    linkToPartA() {
      this.$router.push({
        name:"PartA"
      })
    },
    load() {
      if(this.$route.path.includes('partB')) {
        this.$emit("loading")
      }
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
    font-size: 1rem;
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
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 1.3rem;
  }
</style>
