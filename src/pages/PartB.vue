<template>
  <div>
    <div class="title">{{title}}</div>
    <ul>
      <li v-for="(item,index) in items" :key="item.id"
      @touchend="move(item)" :class="{slider:item.isShow}">
        <a-radio>{{item.name}}</a-radio>
        <a-icon type="right"></a-icon>
        <a-button type="danger" @click="deleteItem(index)">
          删除
        </a-button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '111',
        items:[
        {
          id:1,
          name:'Sitting Room',
          isShow:false
        },
        {
          id:2,
          name:'Bedroom1',
          isShow:false
        },
        {
          id:3,
          name:'Bedroom2',
          isShow:false
        },
        {
          id:4,
          name:'Bedroom3',
          isShow:false
        },
        {
          id:5,
          name:'Toilet',
          isShow:false
        }]
      }
    },
    methods: {
      move(item) {
        setTimeout(() => {
          item.isShow = !item.isShow
        },0)       
      },
      deleteItem(index) {
        this.items.splice(index,1)
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../theme/var.scss';
  @mixin style {
    width: 100%;
    line-height: (100rem/40);
    text-indent: 1rem;
    font-size: 0.8rem;
    color: $--color-title;
    // font-weight: bolder;
  }
  .title {
    @include style;
  }
  ul {
    list-style: none;
    width: 100%;
    padding: 0;
    li {
      @include style;
      // text-indent: 1.5rem;
      position: relative;
      left:0;
      background-color: #fff;
      border-bottom: 1px solid #eee;
      overflow: hidden;
      transition: left 0.5s;
      i {
        position: absolute;
        right: 1rem;
        line-height: (100rem/40);
      }
      button{
        height: 2.5rem;
        width: 4rem;
        border: none;
        position: absolute;
        right:-4rem;
      }
    }
  }
  .slider {
    left:-4rem;
    overflow: visible;
  }

</style>
