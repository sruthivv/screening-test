<template>
  <el-carousel :interval="4000" type="card" :height="props.height">
    <el-carousel-item v-for="option in options" :key="option" class="p-4">
      <Icon name="mingcute:quote-left-fill" class="text-lime-400 text-5xl" />
      <p class="text-sm p-2">{{ option.description }}</p>
      <h3 text="2xl" justify="center">{{ option.authorName }}</h3>
      <p class="text-gray-600 text-xs">{{ option.address }}</p>
      <p class="text-xs">{{ option.about }}</p>
    </el-carousel-item>
  </el-carousel>
</template>
<script setup>
const props = defineProps({
  options: {
    default: () => []
  },
  width: {
    type: String,
    default: () => '100%'
  },
  height: {
    type: String,
    default: () => '250px'
  }
})
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
