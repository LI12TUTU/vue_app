<template>
  <div>
    <div class="icon-wrapper">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-book"></use>
        </svg>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-book"></use>
        </svg>
      </div>
    </div>
    <div class="part">
      Part A
    </div>
    <div class="title1">
      1.Type of Building/land Use  
    </div>
    <a-timeline>
      <a-timeline-item
        v-for="item in items"
        :key="item.id"
        color="gray">
        <div>{{item.title}}</div>       
      </a-timeline-item>
    </a-timeline>
    <div class="other">
      <span>Other</span>
      <input type="text" placeholder="Please State">
    </div>
    <div class="title2">
      2.Facilitier Provided 
    </div>
    <div class="two">
      <input type="text" placeholder="Please State">
    </div>
    <div class="button-wrapper">
      <a-button type="primary" :loading="loading"
        @click="load">
        Save Only
      </a-button>
      <a-button type="primary" @click="linkTo">
        Mark as Completed
      </a-button>
    </div>
  </div>
</template>

<script>
  import '../icon/iconfont.js'
  export default {   
    data () {
      return {
        loading:false,
        items:[
          {
            id: 1,
            title: "Residentual"
          },
          {
            id: 2,
            title: 'Composite'
          },
          {
            id: 3,
            title: 'Industrial'
          }
        ]
      }
    },
    methods:{
      linkTo() {
        this.$router.push({
          name:'Plan'
        })
      },
      load() {
        this.loading = true; 
        setTimeout(() => {
          this.loading = false
        },3000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../theme/var.scss';
  @mixin background-style {
    background: $--color-item;
    line-height: 2rem;
    text-indent: 1.25rem;
    color: $--color-font;
    font-size: 0.8rem;
  }
  @mixin input-style {
    outline:none;
    border:1px solid #eee;
    margin-left: 1.25rem;
    text-indent: 0.5rem;
  }
  @mixin title-style {
    color: $--color-title;
    font-size: 0.8rem;
    font-weight: bolder;
    position: relative;
    left: 1rem;
    right: 0;
    width: 100vw - 5.3333
  }
  .icon-wrapper {
    width: 100%;
    display: flex;
    background-color: $--color-nav;
    div {
      flex: 1;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      &:nth-of-type(1) {
        border-bottom: 2px solid $--color-high;
      }
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
  .ant-timeline {
    margin-top: 2rem;
    .ant-timeline-item {
      padding: 0.1rem !important;
      div {
        width: 95.5%;
        @include background-style;
      }
    }
  }
  .other {
    width: 90%;
    height: 5rem;
    position: relative;
    top: 0;
    left: 1rem;
    right: 0;
    @include background-style;
    input {
      width: 85%;
      @include input-style;
    }
  }
  .part {
    color: $--color-font;
    font-size: 0.5rem;
    position: relative;
    left: 0.2rem;
    right: 0;
    top:1.5rem;
    width: 90%;
  }
  .title1 {
    width: auto;
    @include title-style;
    top: 1.7rem;
  }
  .title2 {
    @include title-style;
    top: 0.2rem;
  }
  .two {
    width: 90%;
    height: 3rem;
    position: relative;
    top: 0.5rem;
    left: 1rem;
    right: 0;
    input {
      height: 100%;
      width: 100%;
      margin-left: 0 !important;
      @include input-style;
      font-size: 0.8rem;
    }
  }
  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
    button {
      width: 40%;
      height: 2rem;
      border: 0;
      font-size: 0.7rem;
      &:nth-of-type(1) {
        background-color: $--color-save;
      }
      &:nth-of-type(2) {
        background-color: $--color-high;
        color: $--color-font;
      }
    }
  }
</style>
