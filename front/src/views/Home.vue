<template>
  <div class="home">
    <Card
      v-for="(gif, idx) in gifImageList.data"
      :key="idx"
      :gif="gif"
    />
  </div>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
  components: {
    Card,
  },
  props: {
    gifImageList: {
      type: Object,
      required: true
    }
  },
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>