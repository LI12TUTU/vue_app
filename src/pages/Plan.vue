<template>
  <div class="plan-wrapper">
    <h4>Job No.: <span>2020/20390/BOC</span></h4>
    <h4>Assigned Inspector:<span>David Chow</span></h4>
    <h3>S9 Florissa Park Giffard Mansion</h3>
    <div v-for="item in items" :key="item.id"
      class="list-wrapper">
      <img src="../assets/images/floor-plan.png">
      <div class="title">{{item.title}}</div>
      <a-button type="primary" @click="linkTo(item.title)">Mark Inspection Spot</a-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items:[
          {
            id:1,
            title:'Floor Plan A'
          },
          {
            id:2,
            title:'Unitled Floor Plan 2'
          }
        ]
      }
    },
    methods:{
      linkTo(title) {
        this.$router.push({
          name:'PartB',
          params:{
            title
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../theme/var.scss';
  .plan-wrapper {
    width: 100%;
  }
  h4{
    padding: 0 20px;
    color: $--color-font;
    span {
      color:$--color-title;
    }
    &:nth-of-type(1) {
      padding-top: 20px;
    }
  }
  h3 {
    padding: 0 20px;
  }
  .list-wrapper{
    width: 90%;
    margin: 0 auto;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    img {
      width: 100%;
    }
    .title {
      width: 100%;
      line-height: 2rem;
      border: 1px solid #eee;
      background: $--color-item-other;
      text-indent: 1rem;
    }
    button {
      height: 2.5rem;
      border:none;
      background: $--color-high;
      color: $--color-title;
    }
  }
</style>
