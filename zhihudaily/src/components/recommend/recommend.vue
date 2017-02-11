<template>
  <div>
    <v-header :title="title"></v-header>
    <div class="recommend" v-el:recommend>
      <div class="recommend-wrapper">
        <ul class="type-list" v-show="recommends">
          <li v-for="type in recommends" class="type">
            <h1>{{type[0].type}}</h1>
            <ul class="item-list">
              <li v-for="item in type" class="item" @click="gotoDetail(item)">
                <div class="item-content">
                  <div class="content">
                    <span class="desc">{{item.desc}}</span>
                    <span class="author">--by:{{item.who}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="detail" v-show="detailShow">
      <iframe :src="selecturl" seamless></iframe>
      <span class="icon-cross" @click="this.detailShow=false"></span>
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
        recommends: null,
        title: '今日推荐',
        detailShow: false,
        selecturl: null
      };
    },
    created() {
      this.$http.get('/api/recommend').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.recommends = response.data.results;
          this.$nextTick(() => {
            this._initScroll();
          });
        }
      });
    },
    methods: {
      _initScroll() {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$els.recommend, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      },
      gotoDetail(item) {
        this.selecturl = item.url;
        this.detailShow = true;
      }
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .recommend
    position: absolute
    top: 40px
    bottom: 44px
    width: 100%
    overflow: hidden
    .recommend-wrapper
      .type-list
        padding: 10px
        .type
          h1
            line-height: 20px
            font-size: 14px
            padding: 0 5px
            color: white
            background: lightskyblue
          .item-list
            .item
              padding: 10px
              .item-content
                border: 1px solid rgba(7, 17, 27, 0.1)
                border-radius: 5px
                padding: 5px
                box-shadow: 2px 2px 2px #888888;
                .content
                  padding: 0 5px
                  .desc
                    color: rgb(27, 27, 27)
                    font-size: 10px
                  .author
                    color: rgb(27, 27, 27)
                    margin-left: 5px
                    font-size: 10px
                    font-weight: bold
  .detail
    position :fixed
    top:0
    left :0
    width :100%
    height :100%
    z-index :200
    background :white
    iframe
      width :100%
      height :100%
    .icon-cross
      position :absolute
      top :5px
      right :5px
      font-size :16px
      padding :6px
      color :white
      background :lightskyblue
      border-radius :50%
</style>
