<template>
  <div class="contact" id="contact" :class="{ch}">
    <div class="inner">
      <h3 class="label">{{ch?'咨询':'お問い合わせ'}}</h3>
      <div class="body" v-html="ch ? `咨询等，可通过电话・传真・邮件・网页联络我们。` : `お仕事のご相談は、<br class='sp-only'/> お電話・FAX・メール・インターネットで受け付けております。<br>まずは、お気軽にお問い合わせください。`">      </div>
      <div class="tel">
        <div class="tel-label">{{ch?'':''}}TEL.</div>
        <div class="tel-no">86-21-3360-6637</div>
      </div>
      <div class="note" v-html="ch?`
      工作时间/ 平日9:00 - 18:00 （周六日节假日除外）<br class='sp-only'/>FAX /86-21-3360-6639　<br class='sp-only'/>邮件 / info@shanghai-zongxiong.com
      `:`
受付時間 / 平日9:00 - 18:00 （土日祝日を除く）<br class='sp-only'/>FAX / 048-924-2981　<br class='sp-only'/>メール / info@shanghai-zongxiong.com
      `">

      </div>
      <a href="mailto:info@shanghai-zongxiong.com" class="button" v-html="ch ? `咨询`:`お問い合わせ`"></a>
      <div class="goto-top" @click="gotoTop"/>
    </div>
  </div>
</template>

<script>
import {scrollTo} from "../../middleware/utils";

export default {
  props: {
    ch: Boolean
  },
  methods: {
    gotoTop() {
      scrollTo(0);
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';


.inner {
  @include pc {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
  }
  @include pc-min {
    max-width: 915px;
  }
}

.contact {
  @include pc {
    padding: 200px 0;
    text-align: center;
  }
  @include pc-min {
    padding: 150px 0;
  }
  @include sp {
    padding: 86px 28px 30px;
  }

  & .inner {
    @include pc {
      max-width: 1220px;
      position: relative;
      padding: 0 60px;
    }
    @include pc-min {
      padding: 0 40px;
      max-width: 955px;
    }

  }

  & .label {
    font-size: 12px;
    color: #888888;
    @include font-yugo;
  }

  & .body {
    line-height: 2;
    @include font-yugo;
    color: #252525;
    @include pc {
      font-size: 18px;
      margin: 25px 0 0;
      letter-spacing: 0.08em;
    }
    @include pc-min {
      font-size: 16px;
      margin: 20px 0 0;
    }
    @include sp {
      font-size: 16px;
      margin: 20px 0 0;
      line-height: 1.9;
    }

  }

  & .tel {
    color: #252525;
    @include font-maison-medium;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    line-height: 1;
    @include pc {
      margin: 32px auto 0;
    }
    @include sp {
      margin: 25px auto 0;
      justify-content: flex-start;
    }

  }

  & .tel-label {
    padding: 0 0 4px;
    @include pc {
      font-size: 25px;
    }
    @include pc-min {
      font-size: 21px;
    }
    @include sp {
      font-size: 20px;
    }

  }

  & .tel-no {
    @include pc {
      font-size: 50px;
      margin: 0 0 0 20px;
    }
    @include pc-min {
      font-size: 41px;
      margin: 0 0 0 16px;
    }
    @include sp {
      font-size: 34px;
      margin: 0 0 0 6px;
      letter-spacing: -0.03em;
    }

  }

  & .note {
    @include font-yugo;
    color: #252525;
    font-weight: normal;
    @include pc {
      font-size: 15px;
      margin: 25px 0 0;
    }
    @include sp {
      font-size: 14px;
      margin: 18px 0 0;
      line-height: 2;
    }

  }

  & .button {
    background: #252525;
    @include font-yugo;
    color: #ffffff;
    border-radius: 100px;
    text-align: center;
    display: block;
    line-height: 1;
    @include pc {
      width: 320px;
      padding: 20px 0;
      margin: 36px auto 0;
      font-size: 15px;
      transition: opacity 250ms;
      &:hover {
        opacity: 0.7;
      }
    }
    @include pc-min {
      padding: 17px 0;
      font-size: 14px;
    }
    @include sp {
      width: 250px;
      padding: 14px 0;
      margin: 55px auto 0;
      font-size: 14px;
    }

  }

  & .goto-top {
    cursor: pointer;

    @include pc {
      @include img(url('/imgs/fa-system/gototop.png'), 15px, 93px);
      position: absolute;
      right: 5px;
      top: calc(50% - 46px);
      transition: opacity 250ms;
      &:hover {
        opacity: 0.7;
      }
    }

    @include pc-min {
      right: 5px;
    }

    @include sp {
      @include img(url('/imgs/sp/fa-system/gototop.png'), 92px, 15px);
      margin: 95px auto 0;
    }
  }
}


.contact.ch {
  & .label,
  & .body,
  & .note,
  & .button {
    @include font-ch;
  }
}

</style>
