module.exports = {
  pages: {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/public/'   //任意
    : '/'
    index: {
      entry: "src/main.js",
      title: "GIF SEARCH | GIF検索サービス"
    }
  }
}