<template>
  <div>
    <router-view keep-alive></router-view>
    <div class="bottombar">
      <div class="item">
        <span v-link="{path:'/welfare'}" class="icon-eye"></span>
      </div>
      <div class="item">
        <span v-link="{path:'/recommend'}" class="icon-bubbles"></span>
      </div>
      <div class="item">
        <span v-link="{path:'/mine'}" class="icon-user"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bottombar
    width: 100%
    height: 44px
    position: absolute
    bottom: 0
    left: 0
    line-height: 44px
    display: flex
    border-top: 1px solid rgba(7, 17, 27, 0.1)
    .item
      flex: 1
      text-align: center
      & > span
        display :inline-block
        font-size: 20px
        color: rgb(77, 85, 93)
        &.active
          color: lightskyblue
</style>
