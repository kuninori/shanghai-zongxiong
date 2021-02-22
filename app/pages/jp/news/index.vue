<template>
  <fa-layout current="news">
    <div class="news-page">
      <div class="inner">
        <div class="title">NEWS</div>
        <div class="list">
          <div class="item">
            <div class="item-title">CMW事業部の画像検査装置が金属産業新聞に掲載されました。</div>
            <div class="item-date">2020.9.21</div>
            <p class="item-body">CMW事業部とFA事業部が共同開発した画像検査装置が、金属産業新聞に掲載されました。<br/>
  この画像検査装置を7月に導入したことで、検査時間の短縮・検査ミスが減少しました。</p>  
            <a class="item-link" href="/jp/news/001">詳しくはこちら</a>
          </div>

          <div class="item">
            <div class="item-title">CMW事業部の画像検査装置が金属産業新聞に掲載されました。</div>
            <div class="item-date">2020.9.21</div>
            <p class="item-body">CMW事業部とFA事業部が共同開発した画像検査装置が、金属産業新聞に掲載されました。<br/>
  この画像検査装置を7月に導入したことで、検査時間の短縮・検査ミスが減少しました。</p>  
            <a class="item-link" href="/jp/news/001">詳しくはこちら</a>
          </div>
          <div class="item">
            <div class="item-title">CMW事業部の画像検査装置が金属産業新聞に掲載されました。</div>
            <div class="item-date">2020.9.21</div>
            <p class="item-body">CMW事業部とFA事業部が共同開発した画像検査装置が、金属産業新聞に掲載されました。<br/>
  この画像検査装置を7月に導入したことで、検査時間の短縮・検査ミスが減少しました。</p>  
            <a class="item-link" href="/jp/news/001">詳しくはこちら</a>
          </div>
        </div>
        <div class="nav">
          <div class="nav-prev">&lt;&lt;戻る</div>
          <div class="nav-nums">
            <a href="/jp/news/" class="nav-page">1</a>
            <span class="nav-slash">/</span>
            <a href="/jp/news/" class="nav-page">2</a>
            <span class="nav-slash">/</span>
            <a href="/jp/news/" class="nav-page">3</a>
          </div>
          <div class="nav-next">次へ&gt;&gt;</div>
        </div>

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
  padding: 220px 0 196px;
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
  margin: 29px 0 0;
}

.item {
  border-top: solid 1px $c-black;
  position: relative;
  @include pc {
    padding: 49px 0 51px;
  }
  @include sp {
    padding: 40px 0;
  }

  &-title {
    @include font-yugo;
    line-height: 2;
    color: $c-black;
    @include pc {
    font-size: 22px;
    margin: 0 0 0 -2px;
    }
    @include sp {
    font-size: 18px;
    }
  }
  &-date {
    @include font-maison-medium;
    margin: 7px 0 0;
    color: $c-gray;
    letter-spacing: 0.04em;
    @include pc {
    font-size: 15px;
    }
    @include sp {
    font-size: 16px;
    }
  }
  &-body {
    @include font-yugo;
    font-weight: normal;
    line-height: 2;
    color: $c-black;
    letter-spacing: 0.03em;
    @include pc {
    font-size: 18px;
    margin: 28px 0 0;
    }
    @include sp {
    margin: 25px 0 0;
    }
  }

  &-link {
    @include font-yugo;
    font-size: 14px;
    color: $c-black;
    display: inline-block;
    border-bottom: solid 1px $c-black;
    letter-spacing: 0.1em;
    transition: 200ms;
    @include pc {
      position: absolute;
      bottom:60px;
    right: 5px;
&:hover {
        border-bottom-color: transparent;
      }
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
    margin: 30px 0 0;
  }

  &-prev {
    font-size: 14px;
    @include font-yugo;
  }
  &-next {
    font-size: 14px;
    @include font-yugo;
  }
  &-nums {
    flex: 1;
    text-align: center;
    font-size: 14px;
    @include font-yugo;
  }
}

</style>