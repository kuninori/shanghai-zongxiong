<template>
  <div class="container">
    <div class="content">

      <MainHeader :current="current" :ch="ch" />
      <slot/>
      <OrderStepsBlock :ch="ch"/>
      <div class="contactus-wrap">
        <div class="contactus-inner">
          <div class="contactus"  :class="{hide:!visibleContactUs}" @click="toContact()">a</div>
        </div>
      </div>
    </div>
    <ContactBlock :ch="ch"/>
    <p class="copyright">©2021 SATAKE Precision Technology Co., Ltd.</p>
  </div>
</template>

<script>

import MainHeader from "../common/MainHeader";
import OrderStepsBlock from "../fa-system/OrderStepsBlock";
import ContactBlock from "../fa-system/ContactBlock";
import {scrollTo} from "@/middleware/utils";

export default {
  components: {MainHeader,OrderStepsBlock,ContactBlock},
  props: {
    ch: Boolean,
    current: String,
  },
  data(){
    return {
      visibleContactUs: false,
    }
  },
  mounted(){
    setTimeout(()=>{
      this.onScroll();
      window.addEventListener("scroll", this.onScroll);
    },1000);
  },
  methods: {
    toContact() {
      const el = document.getElementById("contact");
      const top = el.getBoundingClientRect().top
      const pageTop = window.pageYOffset
      const y = top + pageTop;
      scrollTo(y);
    },
onScroll(){
      const {height} = document.body.getBoundingClientRect();
      const top = window.pageYOffset;
      if(height - window.innerHeight - top < window.innerHeight * 1.0){
        this.visibleContactUs = false;
      } else {
        this.visibleContactUs = true;
      }
    }
  }

}

</script>


<style lang="scss" scoped>
@import '~/assets/css/index';

.container {
  @include pc {
    background: #f5f5f5 url("/imgs/fa-system/bg-line.png") calc(50% - 108px) 0 / 216px auto;
  }
  @include sp {
    background: #f5f5f5 url("/imgs/sp/fa-system/bg-line.png") calc(50% - 31px) 0 / 62px auto;
  }
}

.content {
  overflow: hidden;
  position: relative;
}

.contactus {
  &-wrap {
    filter: invert(100%) contrast(-100);
    left: 0;
    top: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 10;
  }
  &-inner {
    position: relative;
    height: 100%;
    @include pc {
      max-width: 1170px;
      margin: 0 auto;
      padding: 0 20px;
    }
    @include pc-min {
      max-width: 915px;
    }
  }
}

  .contactus {
    @include pc  {
      pointer-events: auto;
      @include img(url('/imgs/fa-system/contact-us.png'), 15px, 107px);
      position: absolute;
      right: -20px;
      top: calc(50% - 53px);
      cursor: pointer;
      transition: 250ms;
      &:hover {
        opacity: 0.7;
      }

      &.hide {
        opacity: 0;
        transition: 120ms;
        pointer-events: none;
      }
    }
    @include sp {
      display: none;
    }
  }

.copyright {
  background: #252525;
  color: #fff;
  @include font-maison-medium;
  text-align: center;

  @include pc {
    font-size: 12px;
    padding: 32px 0 28px;
  }

  @include sp {
    font-size: 12px;
    padding: 24px 0 24px;
  }
}


</style>
