<template>
  <div class="product-feature-item" :data-image-position="imagePosition" :class="{active, ch}">
    <in-view :target="target" @inview="inView" />
    <div class="texts">
      <div class="label">
        <div class="label-inner" />
        <div class="label-text"><slot name="label"/></div>
      </div>
      <div class="attention" :data-pos="attentionPosition">
        <div class="unit" v-if="!unitBefore">
          <slot name="unitBefore"/>
        </div>
        <div class="num">
          <slot name="num"/>
        </div>
        <div class="unit">
          <slot name="unit"/>
        </div>
      </div>
      <p class="body">
        <slot name="body"/>
      </p>
    </div>
    <div class="image">
      <img :src="imageSrc" :width="imageWidth" :height="imageHeight" alt=""/>
    </div>
  </div>
</template>

<script>
import InView from "../common/InView";
export default {
  components: {InView},
  data(){
    return {
      active: false,
      target: undefined,
    }
  },
  props: {
    imagePosition: String,
    imageSrc: String,
    imageWidth: Number,
    imageHeight: Number,
    attentionPosition: String,
  },
  mounted() {
    this.target = this.$el;
  },
  methods: {
    inView(){
      setTimeout(()=>this.active=true, 300);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';

.product-feature-item {
  display: flex;
  @include pc {
    align-items: flex-end;
  }

  @include sp {
    display: flex;
    flex-direction: column-reverse;
  }

  @include pc {
    &[data-image-position='left'] {
      flex-direction: row-reverse;

      & .texts {
        @include pc-min {
          padding: 0 7.5% 0 0;
        }
      }

      & .image {
        margin: 0 50px 0 0;
      }
    }
  }


  &.active {
    & .label {
      transform: scaleX(1);
      transition: 400ms $ease-out-quart;
    }
    & .label-text {
      opacity: 1;
      transition: 300ms 200ms;
    }

    & .num {
      opacity: 1;
      transform: scale(1);
      transition: opacity 500ms 550ms linear, 600ms 550ms $ease-out-quart;
    }

    & .unit {
      opacity: 1;
      transition: 300ms 600ms;
    }

    & .body {
      opacity: 1;
      transition: 800ms 800ms;
    }
  }
}

/* texts ----------------------- */

.texts {
  @include pc {
    flex: 0 0 auto;
    width: 425px;
  }
  @include pc-min {
    flex: 1;
    min-width: 0;
    width: auto;
    padding: 0 0 0 7.5%;
  }
  @include sp {
    padding: 40px 30px 0;
  }
}

.label {
  overflow: hidden;
  position: relative;
  padding: 10px 0;
  color: #fff;
  transform-origin: left;
  transform: scaleX(0);
  @include font-yugo;
  text-align: center;
  @include pc {
    font-size: 18px;
    max-width: 245px;
  }
  @include pc-min {
    font-size: 16px;
    max-width: 230px;
  }
  @include sp {
    font-size: 18px;
    max-width: 250px;
  }
}

.label-inner {
  background: #252525;
  position: absolute;
  left: calc(-10% - 10px);
  top: 0;
  width: 110%;
  height: 100%;
  transform: skewX(-20deg);
}
.label-text {
  position: relative;
  opacity: 0;
}

.attention {
  display: flex;
  align-items: baseline;
  line-height: 1;

  @include pc {
    margin: 0 0 0;
  }
  @include sp {
  }

  &[data-pos="center"] {
    @include pc {
      width: 245px;
      justify-content: center;
    }
    @include pc-min {
      width: 230px;
    }
    @include sp {
      width: 250px;
      justify-content: center;
    }
  }
}

.num {
  @include font-maison-medium;
  white-space: nowrap;
  line-height: 1;
  margin: 25px 0 0;
  color: #252525;
  opacity: 0;
  transform: scale(1.6);
  @include pc {
    font-size: 100px;
  }
  @include pc-min {
    font-size: 100px;
  }
  @include sp {
    font-size: 90px;
  }
}

.unit {
  @include font-yugo;
  white-space: nowrap;
  line-height: 1;
  color: #252525;
  position: relative;
  opacity: 0;
  @include pc {
    font-size: 30px;
    bottom: 5px;
    margin: 0 0 0 7px;
    letter-spacing: 0;
  }
  @include pc-min {
    font-size: 30px;
  }
  @include sp {
    font-size: 28px;
  }

  & span {
    font-size: 20px;
  }
}

.body {
  opacity: 0;
  font-size: 18px;
  @include font-yugo;
  line-height: 2;
  color: #252525;
  @include pc{
    margin: 18px 0 0;
  }

  @include pc-min{
    font-size: 16px;
  }

  @include sp {
    font-size: 16px;
    margin: 15px 0 0;
    letter-spacing: 0.03em;
  }
}

/* image ----------------------- */

.image {
  @include pc {
    margin: 0 0 0 50px;
    min-width: 0;
    flex: 1;
  }
  @include pc-min {
    flex: 0 0 auto;
    width: 50%;
  }
  @include sp {
    height: auto;
  }
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.product-feature-item.ch {
  .label,
  .body,
  .unit {
    @include font-ch;
  }
}

</style>
