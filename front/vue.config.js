module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/app/' : '/',
  pages: {
    index: {
      entry: "src/main.js",
      title: "GIF SEARCH | GIF検索サービス"
    }
  }
}