<template>
  <fa-layout current="p06" :ch="true">
    <product-top
      :ch="true"
      product-no="06"
      poster-src="/imgs/fa-system/rpa-robot-construction/poster.jpg"
      video-src="/videos/06.mp4"
    >
      <template #video></template>
      <template #title>ROBOTIC<br>
        PROCESS<br>
        AUTOMATION</template>
      <template #ja-title>RPA 软件机器人的构筑</template>
      <template #desc>提高人工操作PC的业务效率为目的，<br/>
由软件机器人来实现业务的自动化・高效化。
      </template>
    </product-top>

    <MessageBlack :ch="true">
      <template #label>产品概要</template>
      <template #title>根据每个加工品的情况，EXCEL或网页等每次需输入同样的信息。<br/>
但由于输入失误，操作失误等会发生错误的订单。</template>
      <template #desc>使用自动化操作的RPA及库存・销售管理系统的 Aladdin Office，进行多样的自动化处理，<br/>
大幅减少作业失误和作业时间。<br/>
无需电脑操作，不擅长电脑也可进行复杂的处理。
      </template>
    </MessageBlack>

    <ProductFeatures :ch="true">
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/rpa-robot-construction/1.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>作业工程 25%</template>
          <template #unitBefore>减少</template>
          <template #num>25</template>
          <template #unit>％</template>
          <template #body>复杂的订单下单输入由RPA软件机器人<br/>
进行自动处理。
          </template>
        </ProductFeatureItem>
        <ProductFeatureItem
          class="feature-item"
          image-position="left"
          image-src="/imgs/fa-system/rpa-robot-construction/2.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>订单下单处理</template>
          <template #num>2</template>
          <template #unit>小时</template>
          <template #body>确定合适的下单需求点无需多余库存，
可实现效率化的作业流程。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter :ch="true"
      :before="[
        `Aladdin Office手动输入订单信息`,
        `打印订单目录传真给供应商`,
        `将交货信息手动输入Aladdin Office`,
        `手动输入送货单`,
        `出货`,
      ]"
      :after="[
        [`自动下载订单信息，<br/>登入Aladdin Office后，自动下单发送邮件`, true],
        [`进货型号输入RPA，<br/>进货信息自动登入，自动发单`,true],
        `出货`,
        false,
        false,
      ]">
      <template #boxCaption>由于导入了RPA软件机器人系统</template>
      <template #boxText>以往手动的接受订单下单的作业以自动化的形式进行，大幅减少了人为因素的失误。可迅捷的对应出货。</template>
    </ProductBeforeAfter>

    <ProductSpecs :ch="true" :list="[
      [`对应`,`Windows10 (64bit/32bit、内存8GB)、Excel2013或更高、Aladdin Office`, 'wide'],
    ]">
      <template #title>RPA软件机器人构筑套装</template>
      <template #price>950,000</template>
      <template #sub>RPA Robot年使用费：250,000日元（每年）＋<br/>
RPA开发：600,000日元 （因规模而变动）＋服务费：100,000日元</template>
      <template #boxNote>※部分的な対応や、よりコンパクトに対応することも可能です。</template>
      <template #listNote>※上記の数値は参考値です。</template>
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
