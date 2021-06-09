<template>
  <div class="home">
    <!-- ヘッダー部 -->
    <Header/>
    <!-- サイドメニュー部 -->
    <SideMenu/>
    <!-- ボディ部 -->
    <Body/>
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
