<template>
  <div class="card custom">
    <div class="card-image">
      <figure class="image is-4by3">
        <img class="img" :src="gif.images.original.url" alt="GIF">
      </figure>
      <p class="card-title">{{gif.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    gif: {
      type: Object,
      required: true
    }
  },
}
</script>
<style lang="scss" scoped>
.custom {
  height: 280px;
  width: 320px;
  margin: 8px;
}
.img {
  width: 320px;
  height: 240px;
  object-fit: cover;
}
.card-title {
  padding: 8px;
  width: 320px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>