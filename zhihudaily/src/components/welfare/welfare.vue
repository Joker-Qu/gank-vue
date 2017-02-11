<template>
  <div>
    <v-header></v-header>
    <div class="welfare" v-el:welfare>
      <div class="welfare-content">
        <span v-for="item in welfares" class="item" @click="show(item.url)">
          <img :src="item.url" width="100%" height="100%">
        </span>
      </div>
      <div class="big" v-show="bigshow" @click="this.bigshow=false" transition="opa">
        <div class="imgwrapper">
          <img :src="selecturl" width="80%">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  import BScroll from 'better-scroll';
  import header from '../header/header.vue';
  export default{
    data() {
      return {
        welfares: null,
        bigshow: false,
        selecturl: null
      };
    },
    created() {
      this.$http.get('/api/welfare').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.welfares = response.data.results;
          console.log(this.welfare);
          this.$nextTick(() => {
            this._initScroll();
          });
        }
      });
    },
    methods: {
      _initScroll() {
        console.log('scroll');
        if (!this.scroll) {
          this.scroll = new BScroll(this.$els.welfare, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      },
      show(url) {
        this.bigshow = true;
        this.selecturl = url;
      }
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .welfare
    position: absolute
    top: 40px
    bottom: 44px
    width: 100%
    overflow: hidden
    background: rgb(237, 237, 237)
    .welfare-content
      display: flex
      flex-flow: row wrap
      align-content: flex-start
      .item
        box-sizing: border-box
        flex: 0 0 33%
        border: 1px solid rgba(7, 17, 27, 0.1)
        padding: 10px
        img
          border-radius: 5px
          box-shadow: 2px 2px 2px #888888;
    .big
      position: fixed
      display: flex;
      justify-content: center;
      align-items: center;
      left: 0
      top: 0
      width: 100%
      height: 100%
      z-index: 50
      transition: all 0.4s
      &.opa-transition
        opacity: 1
        background: rgba(157, 157, 157, 0.5)
      &.opa-enter, &.opa-leave
        opacity :0
      .imgwrapper
        width: 80%
        height: 80%
        img
          border-radius: 5px
          width: 100%
          height: 100%
</style>
