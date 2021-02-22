<template>
  <div class="product-features">
    <div class="inner">
      <SectionTitle :ch="ch">
        <template #title>FEATURE</template>
        <template #label>{{ ch ? '产品特点' : '製品の特徴'}}</template>
      </SectionTitle>
      <slot/>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle";
export default {
  components: {SectionTitle},
  props: {
    ch : Boolean,
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';

.product-features {
  @include pc {
    padding: 200px 0;
    background: #fff url("/imgs/fa-system/bg-line.png") calc(50% - 108px) 0 / 216px auto;
  }
  @include pc-min {
    padding: 150px 0;
  }
  @include sp {
    padding: 90px 0;
    background: #fff url("/imgs/sp/fa-system/bg-line.png") calc(50% - 31px) 0 / 62px auto;
  }
}

.inner {
  @include pc {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
  }
  @include pc-min {
    padding: 0;
  }
}

</style>
