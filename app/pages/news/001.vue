<template>
  <fa-layout :ch="true" current="news">
    <div class="news-page">
      <div class="inner">
        <div class="title">NEWS</div>
        <div class="list">
          <div class="item">
            <div class="item-title">ウェブサイトをリニューアルいたしました。</div>
            <div class="item-date">2021.2.20</div>
            <p class="item-body">この度、ウェブサイトを全面リニューアルいたしました。<br/>
            内容の充実を図るとともに、最新の情報を発信してまいりますので、<br/>
            今後ともよろしくお願い致します。</p>
          </div>
        </div>
        <!--
        <div class="nav">
          <div class="nav-prev">&lt;&lt;戻る</div>
          <div class="nav-spacer" />
          <div class="nav-next">次へ&gt;&gt;</div>
        </div>
        -->

      </div>
    </div>
  </fa-layout>
</template>

<script>
export default {
  }
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';

.news-page {
@include pc {
    background: #fff url("/imgs/fa-system/bg-line.png") calc(50% - 108px) 0 / 216px auto;
  }
  @include sp {
    background: #fff url("/imgs/sp/fa-system/bg-line.png") calc(50% - 31px) 0 / 62px auto;
  }
  @include pc {
  padding: 220px 0 196px;

  }
  @include sp {
  padding: 113px 0 196px;
  }
}

.inner {
  color: $c-black;
  @include pc {
    max-width: 1140px;
    margin: 0 auto;
  padding: 0 20px;
  }
  @include pc-min {
    max-width: 915px;
  }
  @include sp {
    padding: 0 30px;
  }
}

.title {
  @include font-maison-medium;
  @include pc {
    font-size: 50px;
  }
  @include sp {
    font-size: 40px;
  }
}

.list {
  border-bottom: solid 1px $c-black;
  @include pc {
  margin: 29px 0 0;

  }
  @include sp {
  margin: 21px 0 0;

  }
}

.item {
  border-top: solid 1px $c-black;
  position: relative;
  @include pc {
    padding: 49px 0 51px;
  }
  @include sp {
    padding: 34px 0 40px;
  }

  &-title {
    @include font-ch;
    line-height: 2;
    color: $c-black;
    @include pc {
    font-size: 22px;
    margin: 0 0 0 -2px;
    }
    @include sp {
    font-size: 18px;
    line-height: 1.777;
    }
  }
  &-date {
    @include font-maison-medium;
    color: $c-gray;
    letter-spacing: 0.04em;
    @include pc {
    margin: 7px 0 0;
    font-size: 15px;
    }
    @include sp {
    font-size: 16px;
    margin: 11px 0 0;
    }
  }
  &-body {
    @include font-ch;
    font-weight: normal;
    line-height: 2;
    color: $c-black;
    letter-spacing: 0.03em;
    @include pc {
    font-size: 18px;
    margin: 28px 0 0;
    }
    @include sp {
    margin: 19px 0 0;
    }
  }

  &-link {
    @include font-ch;
    font-size: 14px;
    color: $c-black;
    display: inline-block;
    border-bottom: solid 1px $c-black;
    transition: 200ms;
    @include pc {
    letter-spacing: 0.1em;
      position: absolute;
      bottom:60px;
    right: 5px;
&:hover {
        border-bottom-color: transparent;
      }
    }
    @include sp {
    letter-spacing: 0.15em;
      margin: 30px 0 0;
    }
  }

  > img {
    width: 100%;
    height: auto;
    @include pc {
      margin: 40px 0 0;
    }
    @include sp {
      margin: 30px 0 0;
    }
  }

}

.nav {
  display: flex;
  @include pc {
    margin: 40px 0 0;
  }
  @include sp {
    margin: 27px 0 0;
  }

  &-prev {
    font-size: 14px;
    @include font-ch;
  }
  &-next {
    font-size: 14px;
    @include font-ch;
  }
  &-spacer {
    flex: 1;
  }
  &-nums {
    flex: 1;
    text-align: center;
    font-size: 14px;
    @include font-ch;
  }
}
</style>
