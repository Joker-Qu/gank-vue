<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="leftWrapper">
        <span class="icon-arrow_lift" v-show="leftShow"></span>
      </div>
      <div class="centerWrapper">
        <span class="title">{{title}}</span>
      </div>
      <div class="rightWrapper" @click="rightclick">
        <span class="icon-plus" v-show="rightShow"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      title: {
        type: String,
        default: '首页'
      },
      leftShow: {
        type: Boolean,
        default: false
      },
      rightShow: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      rightclick() {
        this.$dispatch('rightclick');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position :absolute
    top:0
    left :0
    width: 100%
    height: 20px
    padding: 10px 0
    background: lightskyblue
    color: white
    .header-wrapper
      width: 90%
      margin: 0 auto
      font-size: 0
      .leftWrapper
        display: inline-block
        width: 20%
        .icon-arrow-left
          font-size :12px
          text-align :center
      .centerWrapper
        display: inline-block
        width: 60%
        text-align :center
        .title
          font-size: 16px
          line-height: 20px
          text-align: center
      .rightWrapper
        display: inline-block
        width: 20%
        text-align :center
        .icon-eye
          font-size :12px
</style>
