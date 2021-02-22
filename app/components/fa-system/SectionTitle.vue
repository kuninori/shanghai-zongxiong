<template>
  <h2 class="section-title" :data-white="white", :class="{ch}">
    <slot name="title"/>
    <span class="label"><slot name="label"/></span>
  </h2>
</template>

<script>
export default {
  props: {
    ch: Boolean,
    white: Boolean,
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';


.section-title {
  @include font-maison-medium;
  color: #252525;
  @include pc {
    font-size: 60px;
    text-align: center;
  }
  @include pc-min {
    font-size: 50px;
  }
  @include sp {
    font-size: 50px;
    padding: 0 30px;
  }
}

.label {
  @include font-yugo;
  color: #888888;
  display: block;
  font-size: 12px;
  @include pc {
    margin: 3px 0 0;
  }
  @include sp {
    margin: 8px 0 0 3px;
  }
}

.section-title[data-white=true] {
  color: #fff;
}

.section-title.ch {
  .label {
    @include font-ch;
  }
}

</style>
