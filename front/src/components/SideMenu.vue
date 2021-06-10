<template>
  <div class="side-menu">
    <div class="menu-box">
      <a class="menu-btn mdi mdi-menu"></a>
    </div>
    <div class="navbar">
      <ul>
        <li v-for="(category, idx) in categories" :key="idx">
          <router-link>{{category}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      categories: [
        "Favorite",
        "Sports",
        "Game",
        "News",
        "Art",
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.side-menu{
  height: calc(100vh - 64px);
  width: 200px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  .menu-box {
    display: flex;
    justify-content: flex-end;
    padding: 0 12px;
    .menu-btn {
      font-size: 32px;
    }
  }
}
</style>
