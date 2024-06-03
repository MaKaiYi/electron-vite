<template>
  <div class="app">
    <img :src="requireImg(imgUrl)" />
    <div class="MK" @click="goBack">
      <span class="btn">🔙首页</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const imgUrl = 'detail' + route.query.index + '.png'
const requireImg = (imgPath: string) => {
  return new URL(`/src/assets/images/details/${imgPath}`, import.meta.url).href
}
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<style scoped lang="less">
.app {
  width: 100%;
  height: 100%;
  text-align: center;
  img {
    width: 100%;
    margin: 0 auto;
  }
}
.MK {
  position: fixed;
  bottom: 100px;
  right: 50px;
}
.btn {
  cursor: pointer;
  position: relative;
  padding: 10px 20px;
  width: 100px;
  height: 30px;
  background: #fff;
  font-size: 18px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 1s;
  display: block;
  line-height: 30px;
  color: #000;
}
.btn:after,
.btn:before {
  content: ' ';
  width: 20px;
  height: 10px;
  position: absolute;
  border: 0px solid #fff;
  transition: all 1s;
}
.btn:after {
  top: -2px;
  left: -2px;
  border-top: 2px solid #04af85;
  border-left: 2px solid #04af85;
}
.btn:before {
  bottom: -2px;
  right: -2px;
  border-bottom: 2px solid #04af85;
  border-right: 2px solid #04af85;
}
.btn:hover {
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
.btn:hover:before,
.btn:hover:after {
  width: 90%;
  height: 85%;
}
</style>
