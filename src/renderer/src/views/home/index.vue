<template>
  <div style="height: 100vh; overflow: hidden">
    <swiper
      class="swiper mySwiper2"
      :spaceBetween="10"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      :loop="true"
      :autoplay="true"
      :navigation="true"
    >
      <swiper-slide v-for="(item, index) of slides" :key="index">
        <img class="img" :src="item" @click="toDetail(index)" />
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      class="swiper mySwiper"
      :slidesPerView="4"
      :watchSlidesProgress="true"
      :modules="modules"
      :autoplay="true"
      :loop="true"
    >
      <swiper-slide v-for="(item, index) of slides" :key="index">
        <img class="img" :src="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import { Thumbs, Navigation, Autoplay, Zoom, FreeMode } from 'swiper/modules'
const modules = [Thumbs, Navigation, Autoplay, Zoom, FreeMode]
import { useRouter } from 'vue-router'
const slides = reactive([
  new URL('@/assets/images/1.png', import.meta.url).href,
  new URL('@/assets/images/2.png', import.meta.url).href,
  new URL('@/assets/images/3.png', import.meta.url).href,
  new URL('@/assets/images/4.png', import.meta.url).href,
  new URL('@/assets/images/5.png', import.meta.url).href,
  new URL('@/assets/images/6.png', import.meta.url).href,
  new URL('@/assets/images/7.png', import.meta.url).href,
  new URL('@/assets/images/8.png', import.meta.url).href
])
const thumbsSwiper = ref<any>(null)
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}
const router = useRouter()
const toDetail = (index: number) => {
  const num = (index += 1)
  router.push('/detail?index=' + num)
}
</script>

<style scoped lang="less">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
:deep(.swiper-button-prev, .swiper-button-next) {
  color: #04af85;
}
:deep(.swiper-button-next) {
  color: #04af85;
}
body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
  cursor: pointer;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
  background-color: #000;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
