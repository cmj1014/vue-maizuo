<template>
  <div>
    login
    <van-button type="info">登录</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
export default {
  name: 'login',
  components:{

  },
  mounted(){
    let id= this.$route.params.id
    console.log("id",id)
  }
}
</script>

<style scoped lang="scss">

</style>
