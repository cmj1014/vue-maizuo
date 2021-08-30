<template>
  <ul>
    <router-link to="/film/nowplaying" tag="li">正在热映</router-link>
    <router-link to="/film/comingsoon" tag="li">即将上映</router-link>
  </ul>
</template>

<script>

export default {
  name: "filmHeader",
  components: {

  },
  mounted(){

  },
  data(){
    return{
     
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
