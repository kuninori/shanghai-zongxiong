<template>
  <div class="header-area">
    <header class="main-header">
      <div class="inner">
        <h1 class="logo"><a :href="ch ? '/': '/jp/'">
          <GroupLogo class="logo-item" :black="true"/>
        </a></h1>

        <div class="langs">
          <a class="langs-ch" :class="{active:ch}" href="/">CH</a>
          <span class="langs-pipe"></span>
          <a class="langs-jp" :class="{active:!ch}" href="/jp/">JP</a>
        </div>

        <div class="button-menu" :class="{active:showMenu}" @click="showMenu=true">
          <div class="button-line l1"></div>
          <div class="button-line l2"></div>
          <div class="button-line l3"></div>
        </div>
      </div>
    </header>
    <header class="main-header-fixed" :class="{visibleFixedMenu}">
      <div class="inner-fixed">
        <h1 class="logo"><a  :href="ch ? '/': '/jp/'">
          <GroupLogo class="logo-item" :black="true"/>
        </a></h1>

        <div class="langs">
          <a class="langs-ch" :class="{active:ch}" href="/">CH</a>
          <span class="langs-pipe"></span>
          <a class="langs-jp" :class="{active:!ch}" href="/jp/">JP</a>
        </div>

        <div class="button-menu" :class="{active:showMenu}" @click="showMenu=true">
          <div class="button-line l1"></div>
          <div class="button-line l2"></div>
          <div class="button-line l3"></div>
        </div>
      </div>
    </header>
    <MainMenu :current="current" :ch="ch" v-if="showMenu" @close="showMenu=false"/>
  </div>
</template>

<script>
import GroupLogo from "../svg/GroupLogo";
import MainMenu from "./MainMenu";

export default {
  components: {MainMenu, GroupLogo},
  props: {
    ch: Boolean,
    current: String,
  },
  data() {
    return {
      showMenu: false,
      visibleFixedMenu: false,
      lastScrollY: 0,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    classActive(name) {
      return {active: name === this.active};
    },
    onScroll() {
      const y = window.pageYOffset;
      if (y > 120) {
        this.visibleFixedMenu = true;
      } else {
        this.visibleFixedMenu = false;
      }

      this.lastScrollY = y;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';

.main-header {
  margin: 0 auto;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
}

.main-header-fixed {
  margin: 0 auto;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  background: #fff;
  transform: translateY(-110%);
  transition: transform 300ms;

  &.visibleFixedMenu {
    transform: translateY(0);
  }
}

.inner-fixed {
  @include pc {
    max-width: 1140px;
    padding: 21px 20px 19px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    z-index: 2;
    position: relative;

    > .langs {
      top: 29px;
      right: 127px;
    }

    > .button-menu {
      top: 25px;
    }
  }
  @include pc-min {
    max-width: 915px;
    padding: 16px 20px 15px;

    > .langs {
      top: 20px;
      right: 93px;
    }

    > .button-menu {
      top: 20px;
    }
  }

  @include sp {
    padding: 15px 30px;

    & > .button-menu {
      top: 15px;
    }

    > .langs {
      top: 18px;
    }
  }

}

.logo {
  display: block;
  @include pc {
    width: 216px;
    height: 40px;
    font-size: 0;
    min-width: 97px;
  }

  @include pc-min {
    width: 156px;
    height: 29px;
  }

  @include sp {
    width: 146px;
    height: 27px;
  }


  & a {
    display: block;
    height: 100%;
    transition: 150ms;

    &:hover {
      opacity: 0.7;
    }
  }
}


.inner {
  @include pc {
    max-width: 1140px;
    padding: 80px 20px 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    z-index: 2;
    position: relative;
  }
  @include pc-min {
    max-width: 915px;
    padding: 50px 20px 0;
  }

  @include sp {
    padding: 30px 30px 0;
  }
}

.button-menu {
  position: absolute;
  cursor: pointer;

  @include pc {
    width: 45px;
    height: 28px;
    right: 20px;
    top: 86px;
    transition: opacity 200ms;
    &:hover {
      opacity: 0.6;
    }
  }
  @include pc-min {
    width: 32px;
    height: 21px;
    top: 52px;
    right: 20px;
  }

  @include sp {
    width: 36px;
    height: 23px;
    top: 32px;
    right: 30px;
  }

  &.active {
    & .button-line {
      transition: 300ms $ease-in-out-cubic;
      opacity: 0;
    }
    & .button-line.l1 {
      transform: translateY(10px);
    }

    & .button-line.l3 {
      transform: translateY(-10px);
    }
  }
}

.button-line {
  transition: 300ms $ease-in-out-cubic 350ms;
  background: #252525;
  position: absolute;
  right: 0;
  top: 0;

  @include pc {
    width: 45px;
    height: 4px;
    &.l1 {
      top: 0
    }

    &.l2 {
      top: 12px;
      width: 30px
    }

    &.l3 {
      top: 24px
    }
  }
  @include pc-min {
    width: 32px;
    &.l1 {
      top: 0;
    }

    &.l2 {
      top: 8px;
      width: 21px
    }

    &.l3 {
      top: 17px;
    }
  }
  @include sp {
    width: 36px;
    height: 3px;
    &.l1 {
      top: 0
    }

    &.l2 {
      top: 10px;
      width: 22px
    }

    &.l3 {
      top: 20px
    }
  }

}


.langs {
  position: absolute;
  display: flex;
  font-display: block;

  @include pc {
    right: 127px;
    top: 87px;
    transition: opacity 200ms;
  }
  @include pc-min {
    top: 52px;
    right: 83px;
  }

  @include sp {
    top: 34px;
    right: 82px;
  }


  &-ch,
  &-jp {
    display: block;
    transition: color 200ms;
    @include font-maison-medium;
      color: #888;

    &.active {
    color: $c-black;
    }


    @include pc {
    font-size: 24px;
    &:hover {
      color: $c-black;
    }


    }
    @include pc-min {
    font-size: 20px;
    }
    @include sp {
      font-size: 20px;
    }
  }
  &-pipe {
    display: block;
   background: $c-black;
    @include pc {
      width: 3px;
      height: 25px;
      margin: 0 12px;
 
    }
    @include pc-min {
      width: 2px;
      height: 21px;
      margin: -1px 12px 0 9px;
    }
    @include sp {
      width: 2px;
      height: 21px;
      margin: -1px 12px 0 9px;
    }
  }

}


</style>
