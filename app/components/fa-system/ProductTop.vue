<template>
  <div class="product-top" :class="{active, ch}">
    <div class="inner">
      <div class="image">
        <div class="video"
             @click="showModal=true"
             :style="{ backgroundImage: `url(${posterSrc})` }">
          <div class="play"/>
        </div>
        <div class="product-num">{{ productNo }}</div>
      </div>
      <div class="texts">
        <h1 class="title">
          <slot name="title"/>
        </h1>
        <div class="title-ja">
          <slot name="ja-title"/>
        </div>
        <div class="desc">
          <slot name="desc"/>
        </div>
      </div>
    </div>
    <div class="modal" v-if="showModal" @click="clickModalRoot">
      <div class="modal-inner">
        <div class="modal-wrap">
          <div class="close" @click="showModal=false">
            <div class="close-l1"></div>
            <div class="close-l2"></div>
          </div>

          <div class="content">
            <div class="player">
              <video controls class="video" :src="videoSrc" :poster="posterSrc" autoplay />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YoutubePlayer from './YoutubePlayer.vue';


export default {
  components:{YoutubePlayer},
  props: {
    ch: Boolean,
    productNo: String,
    posterSrc: String,
    videoSrc: String,
  },
  data() {
    return {
      showModal: false,
      active: false,
    }
  },
  mounted() {

    setTimeout(() => {
      this.active = true;
    }, 500);
  },
  methods: {
    clickModalRoot(e) {
      if (e.target !== e.currentTarget) {
        return;
      }

      this.showModal = false;
    },
  },
  watch: {
    showModal(v){
      if(!v) return;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';

.product-top {
  display: flex;
  align-items: center;
  @include pc {
    height: 980px;
    background: #fff url("/imgs/fa-system/bg-line.png") calc(50% - 108px) 0 / 216px auto;
  }
  @include pc-min {
    height: 650px;
  }
  @include sp {
    padding: 120px 0 0;
    background: #fff url("/imgs/sp/fa-system/bg-line.png") calc(50% - 31px) 0 / 62px auto;
  }

  &.active {
    & .image {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 500ms 0ms ease-in-out, 1000ms 0ms $ease-out-cubic;
    }

    & .title {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 400ms 0ms ease-in-out, 600ms 500ms $ease-out-quart;
    }

    & .title-ja {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 400ms 0ms ease-in-out, 600ms 580ms $ease-out-quart;

    }

    & .desc {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 400ms 0ms ease-in-out, 600ms 660ms $ease-out-quart;
    }

    & .contactus {
      opacity: 1;
      transition: opacity 300ms 1400ms ease-out;
    }
  }
}

.inner {
  position: relative;
  width: 100%;
  @include pc {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
  @include pc-min {
    max-width: 915px;
  }
}


.texts {
  @include pc {
    flex: 1;
    margin: 0 40px 0 0;
  }
  @include sp {
    padding: 55px 28px 85px;
  }
}

.title {
  opacity: 0;
  transform: translateY(20px);
  @include font-maison-medium;
  line-height: 1.1;
  @include pc {
    font-size: 50px;
  }
  @include pc-min {
    font-size: 40px;
  }
  @include sp {
    font-size: 40px;
  }
}

.title-ja {
  opacity: 0;
  transform: translateY(20px);
  @include font-yugo;
  @include pc {
    font-size: 22px;
    margin: 25px 0 0;
  }
  @include pc-min {
    margin: 20px 0 0;
    font-size: 20px;
  }
  @include sp {
    margin: 18px 0 0;
    font-size: 18px;
  }
}

.desc {
  opacity: 0;
  transform: translateY(20px);
  line-height: 2;
  @include font-yugo;
  font-weight: normal;
  @include pc {
    margin: 30px 0 0;
    font-size: 18px;
  }
  @include pc-min {
    margin: 20px 0 0;
    font-size: 16px;
  }
  @include sp {
    margin: 24px 0 0;
    font-size: 16px;
  }
}

.image {
  opacity: 0;

  flex: 0 0 auto;
  min-width: 0;
  position: relative;
  @include pc {
    width: 620px;
    height: 420px;
    transform: translateX(-20px);
  }
  @include pc-min {
    width: 482px;
    height: 326px;
  }
  @include sp {
    margin: 0 30px;
  }
}

.video {
  width: 100%;
  height: 100%;
  background: no-repeat center / cover;
  cursor: pointer;

  @include pc {
    &:hover {
      & .play {
        opacity: 0.7;
      }
    }
  }

  @include sp {
    padding-top: 67.6%;
    height: auto;
    video {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }
  }

}

.play {
  pointer-events: none;
  width: 80px;
  height: 80px;
  background: url("/imgs/fa-system/play-button.svg") no-repeat center / contain;
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  transition: opacity 300ms;
}

.product-num {
  background: #fff;
  position: absolute;
  @include font-maison-medium;
  @include pc {
    font-size: 100px;
    padding: 20px 25px;
    top: -70px;
    right: -25px;
  }
  @include pc-min {
    font-size: 75px;
    padding: 20px 23px;
    top: -50px;
    right: -25px;
  }
  @include sp {
    font-size: 60px;
    padding: 20px 12px 12px;
    background: #fff;
    right: -30px;
    top: -20px;
  }
}

.contactus {
  opacity: 0;
  @include pc {
    @include img(url('/imgs/fa-system/contact-us.png'), 15px, 107px);
    position: absolute;
    right: -20px;
    top: calc(50% - 53px);
    cursor: pointer;
    transition: opacity 250ms;
    &:hover {
      opacity: 0.7;
    }
  }
  @include sp {
    display: none;
  }
}

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(36, 37, 38, 0.95);
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-inner {
  pointer-events: none;
  @include pc {
    position: relative;
    max-width: 1140px;
    padding: 0 20px;
    height: 100%;
    width: 100%;
  }
  @include sp {
    width: calc(100% - 60px);
  }
}

.modal-wrap {
  @include pc {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.content {
  @include pc {
    flex: 0 0 auto;
  }
}

.player {
  pointer-events: auto;
  flex: 0 0 auto;
  position: relative;
  padding-top: 67.63%;
  overflow: hidden;
  background: #000;

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  @include pc {
    width: 620px;
  }
  @include pc-min {
    width: 484px;
  }
  @include sp {
  }
}

.close {
  pointer-events: auto;
  width: 30px;
  height: 30px;
  position: absolute;
  cursor: pointer;

  @include pc {
    top: 80px;
    right: 20px;
    transition: opacity 200ms;
    &:hover {
      opacity: 0.7;
    }
  }

  @include pc-min {
  }

  @include sp {
    top: 30px;
    right: 30px;
  }

  & .close-l1 {
    position: absolute;
    left: 0;
    top: calc(50% - 2px);
    height: 3px;
    width: 100%;
    background: #fff;
    transform: rotate(-45deg);
  }

  & .close-l2 {
    position: absolute;
    left: 0;
    top: calc(50% - 2px);
    height: 3px;
    width: 100%;
    background: #fff;
    transform: rotate(45deg);
  }
}

.product-top.ch {
  .title-ja,
  .desc {
    @include font-ch;
  }

}


</style>
