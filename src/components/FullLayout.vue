<template>
  <div class="full_layout">
      
      <slot/><!-- //接收插槽 -->
  </div>
</template>

<style scoped>
    .full_layout{
        
        z-index: 2;/* //悬浮在导航的上面 */
        position: absolute;
        top: 0;
        bottom:0;
        width: 100%;
        background-color: #ffffff;
    }
</style>


