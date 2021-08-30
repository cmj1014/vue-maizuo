<template>
    <!-- 封装滚动组件 -->
    <div class="wrapper" ref="wrapper">
        <!-- 内容分发 -->
        <slot class="wrapper2"></slot>
    </div>

</template>

<script>
import BScroll from "better-scroll";
export default {
      props : {
            handleToScroll : {
                type : Function,
                // 默认一个空的方法 防止报错
                default : function(){},
            },
            handleToTouchEnd : {
                type:Function,
                default: function(){}
            }
        },
        mounted(){
              //接收两个参数 1.找到最外层包裹的容器 dom元素 2.配置元素 true 开启配置
              this.$nextTick(()=>{
                var scroll = new BScroll( '.wrapper2',{
                tap:true,
                probeTybe: 1
            });
              })
            

           /*  scroll.on('scroll',(pos) => {
                this.handleToScroll(pos);
            });

            scroll.on('touchEnd',(pos) => {
                this.handleToTouchEnd(pos);
            }) */
        }
};
</script>
<style scoped lang="scss">
// .wrapper {
//     height: calc(
//         100vh - 96px
//     ); //切记使用 calc 的时候，里面的 - 左右两边一定要有个空格，快被这个bug搞死了;
//     background-color: #fff;
//     overflow: hidden;
//     margin-top: 46px;
// }
 
</style>
