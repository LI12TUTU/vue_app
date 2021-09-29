<template>
  <div>
    <div class="title">{{title}}</div>
    <ul>
      <li v-for="(item,index) in items" :key="item.id"
      @touchend="move(item)" :class="{slider:item.isShow}">
        <a-radio>{{item.name}}</a-radio>
        <a-icon type="right"></a-icon>
        <a-popconfirm
          placement="top"
          title="确认删除吗？"
          ok-text="确定"
          cancel-text="取消"
          @confirm="confirm(index)"
          @cancel="cancel(item)"
        >
          <a-button type="danger" @click="click()">
            Remove
          </a-button>
        </a-popconfirm>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: this.$route.params.title,
        isClick: false,
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
          if(this.isClick){
            this.isClick = false
            item.isShow = true
          }else{
            item.isShow = !item.isShow
          }           
        },0)             
      },
      click(){
        this.isClick = !this.isClick;
      },
      confirm(index) {
        this.isClick = false;
        this.items.splice(index,1)
        this.$message.success("删除成功")
      },
      cancel(item) {
        item.isShow = false
        this.isClick = false;
        this.$message.error("删除失败")
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
      font-weight: bolder;
      /* text-indent: 1.5rem; */
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
