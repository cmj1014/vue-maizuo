<template>
  <div class="topHead">
    <h2>{{data}}</h2>
  </div>
</template>

<script>
export default {
  name: "topHead",
  props:["data"],
  data() {
    return {
     
    };
  },
  mounted(){
    
  },
  methods:{
    init(){
      
    }
  }
};
</script>
<style scoped lang="scss">
.topHead {
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  background-color:white;
  width: 100%;
  height:50px;
  line-height:50px;
  h2 {
    margin:0;
  }
}
</style>
