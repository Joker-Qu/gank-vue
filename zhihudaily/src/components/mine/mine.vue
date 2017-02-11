<template>
  <div>
    <v-header :title="title"></v-header>
    <div class="mine">
      <div class="mine-content">
        <div class="user">
          <div class="left">
            <img src="../../assets/user.png" width="50px" height="50px">
          </div>
          <div class="right">
            <p class="username">Joker</p>
            <p class="desc">只做了一些微小的工作</p>
          </div>
        </div>
        <div class="content">
          <h2>下一步要完成的</h2>
          <ul>
            <li>收藏</li>
            <li>上拉加载</li>
            <li>发表</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import header from '../header/header.vue';
  export default{
    data() {
      return {
        title: '我的'
      };
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mine
    position: absolute
    top: 40px
    bottom: 44px
    width: 100%
    overflow: hidden
    .mine-content
      background: white
      .user
        display: flex
        padding: 10px
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .left
          flex: 0 0 50px
        .right
          flex: 1
          padding-left: 20px
          p
            line-height: 26px
            font-size: 14px
      .content
        margin-top: 20px
        padding :10px
        border-top: 1px solid rgba(7, 17, 27, 0.1)
        h2
          line-height :30px
          font-size :20px
        ul
          margin-top :10px
          li
            line-height :20px
            font-size :14px
</style>
