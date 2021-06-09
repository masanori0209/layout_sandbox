<template>
  <div id="app">
    <!-- ヘッダー部 -->
    <Header/>
    <!-- サイドメニュー部 -->
    <div class="main">
      <SideMenu/>
      <!-- ボディ部 -->
      <Body>
        <router-view/>
      </Body>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import SideMenu from '@/components/SideMenu.vue'
import Body from '@/components/Body.vue'
export default {
  components: {
    Header,
    SideMenu,
    Body
  },
  data () {
    return {
      parameter: {
        imageFile: null, // 画像データ
        readType: 'v1', // AI側の呼び出しタイプ（'v1': モックアップ, 'v2': AI）
      }
    }
  },
}
</script>
<style>
@import 'https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');

#app {
  font-family: 'Noto Sans JP', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
