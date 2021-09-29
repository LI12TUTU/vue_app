<template>
  <div class="login">
      <div class="test">Test</div>
      <div class="title">
          Smart Inspection System
      </div>
      <a-button type="primary" @click="linkToHome">
        Login
      </a-button>
      <img src="../assets/images/login-image.png" alt="login">
  </div>
</template>

<script>
    export default {
        name:'Login',
        methods:{
            linkToHome() {
                this.$router.push({
                    name:'PartA'
                })
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../theme/var.scss';
    .login{
        width: 100%;
        height: (400rem/40);
        margin: (280rem/40) auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        color: $--color-title;
        .test {
            background-color: $--color-high;
            width: (150rem/40);
            line-height: (150rem/40);
            font-size: 1.2rem;
        }
        .title {
            font-size: 1.3rem;
            font-weight: bolder;
        }
        button {
            width: (640rem/40);
            height: (90rem/40);
            background-color: $--color-high;
            color: $--color-title;
            border: none;
            font-size: 0.8rem;
        }
        img {
            display: block;
            vertical-align: bottom;
            width: 100%;
            position: absolute;
            bottom: 0;
        }
    }

</style>