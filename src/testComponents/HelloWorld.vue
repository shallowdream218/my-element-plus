<template>
  <section class="screen-box">
    <div class="screen-wrapper" ref="screenWrapper">
      <div class="content_wrapper">
        <div class="title_wrap">
          <span class="title_text">大屏可视化平台</span>
        </div>
        <div class="index-box">
          <!-- 左侧内容 -->
          <div class="content_left">
            <div class="content_left-top"></div>
            <div class="content_left-center"></div>
            <div class="content_left-bottom"></div>
          </div>

          <!-- 中间内容 -->
          <div class="content_center">
            <div class="center_top"></div>
            <div class="center_bottom"></div>
          </div>

          <!-- 右侧内容 -->
          <div class="content_right">
            <div class="content_right-top"></div>
            <div class="content_right-center"></div>
            <div class="content_right-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name: 'testDebounce123'
    }
  },
  mounted() {
    const autoScale = this.debounce(1000, this.autoScale)
    this.screenWrapper = this.$refs.screenWrapper;
    window.addEventListener('resize', autoScale)
    autoScale();
    // const autoScale = this.throttle(1000, this.autoScale)
    // window.addEventListener('resize', autoScale)
  },
  methods: {
    autoScale() {
      const currentWidth = document.body.clientWidth;
      const currentHeight = document.body.clientHeight;
      const wScale = currentWidth / 1920;
      const hScale = currentHeight / 1080;
      console.log(currentWidth, currentHeight);
      const minScale = Math.min(wScale, hScale)
      this.screenWrapper.style.transform = `scale(${minScale}, ${minScale})`

      // 设置margin
      const tbMargin = (currentHeight - 1080 * minScale)/2;
      const lrMargin = (currentWidth - 1920 * minScale)/2;
      console.log(tbMargin, lrMargin);
      this.screenWrapper.style.margin = `${tbMargin}px ${lrMargin}px`
    },
    debounce(delay, fn) {
      let timer = null;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, delay)
      }
    },
    throttle(delay, fn) {
      let timer = null
      return function () {
        if (!timer) {
          timer = setInterval(() => {
            fn();
            clearInterval(timer);
            timer = null;
          }, delay)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.screen-box {
  background-color: rgb(3, 5, 12);
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .screen-wrapper {
    transform-origin: left top;
    transition-duration: 500ms;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    width: 1920px;
    height: 1080px;
    background-color: orange;

    .content_wrapper {
      box-sizing: border-box;
      padding: 16px;
      width: 100%;
      height: 100%;
      background-image: url('@/assets/pageBg.png');

      .title_wrap {
        height: 60px;
        background-image: url('@/assets/top.png');
        margin-bottom: 4px;
        box-sizing: border-box;

        .title_text {
          font-size: 38px;
          font-weight: 900;
          letter-spacing: 6px;
          background: linear-gradient(92deg,
              #0072ff 0%,
              #00eaff 48.8525390625%,
              #01aaff 100%);
        }
      }

      .index-box {
        display: flex;
        min-height: calc(100% - 64px);
        justify-content: space-between;

        .content_left {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 540px;

          .content_left-top {
            background-color: #2cf7fe;
            // border: 1px solid #2cf7fe;
            height: 310px;
          }

          .content_left-center {
            background-color: #2cf7fe;
            // border: 1px solid #2cf7fe;
            height: 310px;
          }

          .content_left-bottom {
            background-color: #2cf7fe;
            // border: 1px solid #2cf7fe;
            height: 310px;
          }
        }

        .content_center {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin: 0 54px;
          flex-grow: 1;

          .center_top {
            background-color: #6586ec;
            // border: 1px solid #6586ec;
            height: 640px;
            margin-bottom: 30px;
          }

          .center_bottom {
            background-color: #6586ec;
            // border: 1px solid #6586ec;
            height: 315px;
          }
        }

        .content_right {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 540px;

          .content_right-top {
            background-color: #2cf7fe;
            // border: 1px solid #2cf7fe;
            height: 310px;
          }

          .content_right-center {
            background-color: #2cf7fe;
            // border: 1px solid #2cf7fe;
            height: 310px;
          }

          .content_right-bottom {
            background-color: #2cf7fe;
            // border: 1px solid #2cf7fe;
            height: 310px;
          }
        }
      }
    }

  }
}
</style>
