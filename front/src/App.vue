<template>
  <div id="app">
    <!-- ヘッダー部 -->
    <Header @searchAPI="searchAPI" @trendAPI="trendAPI"/>
    <!-- サイドメニュー部 -->
    <div class="main">
      <SideMenu/>
      <!-- ボディ部 -->
      <Body>
        <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
        <router-view :gifImageList="gifImageList"/>
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
      gifImageList: [],
      isLoading: true
    }
  },
  watch: {
    $route () {
      this.isLoading = true
      this.$gf.search(
        this.$route.query.category,
        {
          sort: 'relevant',
          lang: 'es',
          limit: 30,
          type: 'stickers'
        }).then((d) => {
          this.gifImageList = d
          this.isLoading = false
        })
    }
  },
  methods: {
    searchAPI (text) {
      this.isLoading = true
      this.$gf.search(text,
        {
          sort: 'relevant',
          lang: 'es',
          limit: 30,
          type: 'stickers'
        }).then((d) => {
          this.gifImageList = d
          this.isLoading = false
        })
    },
    trendAPI () {
      this.isLoading = true
      this.$gf.trending({ limit: 10 }).then((d) => {
        this.gifImageList = d
        this.isLoading = false
      })
    }
  },
  mounted () {
    this.trendAPI()
  }
}
</script>
<style lang="scss">
@import 'https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');

#app {
  font-family: 'Noto Sans JP', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  .main {
    height: calc(100vh - 64px);
    width: -webkit-fill-available;
    display: flex;
  }
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #375b98;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);

// Lists and maps
$custom-colors: null !default;
$custom-shades: null !default;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: mergeColorMaps(
    (
        "white": (
            $white,
            $black,
        ),
        "black": (
            $black,
            $white,
        ),
        "light": (
            $light,
            $light-invert,
        ),
        "dark": (
            $dark,
            $dark-invert,
        ),
        "primary": (
            $primary,
            $primary-invert,
            $primary-light,
            $primary-dark,
        ),
        "link": (
            $link,
            $link-invert,
            $link-light,
            $link-dark,
        ),
        "info": (
            $info,
            $info-invert,
            $info-light,
            $info-dark,
        ),
        "success": (
            $success,
            $success-invert,
            $success-light,
            $success-dark,
        ),
        "warning": (
            $warning,
            $warning-invert,
            $warning-light,
            $warning-dark,
        ),
        "danger": (
            $danger,
            $danger-invert,
            $danger-light,
            $danger-dark,
        ),
    ),
    $custom-colors
);

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
