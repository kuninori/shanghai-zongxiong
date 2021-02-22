<template>
  <fa-layout current="p05" :ch="true">
    <product-top
      :ch="true"
      product-no="05"
      poster-src="/imgs/fa-system/dnc-equipment-online/poster.jpg"
      video-src="/videos/05.mp4"
    >
      <template #title>DIRECT<br>NUMERICAL<br>CONTROL</template>
      <template #ja-title>DNC（装置的自动连线）</template>
      <template #desc>读取QR编码的型号后，<br/>加工数据可通过网络传输至NC加工机进行设定。
      </template>
    </product-top>

    <MessageBlack :ch="true">
      <template #label>产品概要</template>
      <template #title>使用NC加工机时的加工失误，大多由于设定失误而造成。<br/>
设定失误的原因大多为，选择加工产品和数据失误，或编辑数据时设定数值失误等原因。
      </template>
      <template #desc>为避免作业失误，通过网络对全部的加工数据进行管理，<br/>
对于对象加工品仅读取QR编码，即可对NC加工机进行适合的设定。<br/>
省略了NC加工机的数据设定，对象加工品数据选择的时间。
      </template>
    </MessageBlack>

    <ProductFeatures :ch="true">
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/dnc-equipment-online/1.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>不良发生率/月</template>
          <template #unitBefore>减少</template>
          <template #num>10</template>
          <template #unit>％</template>
          <template #body>减少了因作业者的加工数据编辑失误而<br/>
造成的不良品的发生。
          </template>
        </ProductFeatureItem>
        <ProductFeatureItem
          class="feature-item"
          image-position="left"
          image-src="/imgs/fa-system/dnc-equipment-online/2.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center">
          <template #label>作業時間/月</template>
          <template #unitBefore>可减少</template>
          <template #num>1</template>
          <template #unit><span>（预测）</span></template>
          <template #body>省略了加工者将加工数据从<br/>PC至NC加工机的步骤。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter :ch="true"
      :before="[
        `由产品番号手动选择程序`,
        `手动设定装置的数值`,
        `目视画面确认设定内容修正`,
        `开始作业`,
      ]"
      :after="[
      [`读取QR编码将程序和数值自动转发`,false],
      `开始作业`,
      false,
      false,
      ]">
      <template #boxCaption>由于导入DNC（装置的连线）</template>
      <template #boxText>编辑的是读取QR编码的正确数据，且加工数据通过网路传送。可迅捷的对应出货。</template>
    </ProductBeforeAfter>

    <ProductSpecs :ch="true">
      <template #title>DNC（装置的自动连线）套装</template>
      <template #no-price>开发中</template>
      <template #sub>对于FANUC制NC装置，可通过TCP/IP转发程序和设定数值。</template>
      <template #boxNote>※可根据需求进行部分的个别对应。</template>
    </ProductSpecs>
  </fa-layout>
</template>


<script>
import ProductTop from "@/components/fa-system/ProductTop";
import ProductBeforeAfter from "@/components/fa-system/ProductBeforeAfter";
import ProductSpecs from "@/components/fa-system/ProductSpecs";
import ProductFeatures from "@/components/fa-system/ProductFeatures";
import MessageBlack from "@/components/fa-system/MessageBlack"
import FaLayout from "@/components/layout/FaLayout";
import SectionTitle from "@/components/fa-system/SectionTitle";
import ProductFeatureItem from "@/components/fa-system/ProductFeatureItem";
import {headMetas} from "@/middleware/utils";

export default {
  components: {
    ProductFeatureItem,
    FaLayout,
    ProductTop,
    ProductSpecs,
    ProductBeforeAfter,
    ProductFeatures,
    MessageBlack,
    SectionTitle,
  },
  head() {
    return headMetas({
      title: 'SATAKE COMPACT FA SYSTEM | 協働・省人化に特化したコンパクトな佐竹のFA製品'
    }, false)
  },
}
</script>


<style src="~/assets/css/product.scss" lang="scss" scoped/>
