import logapi from "../api/logapi"

/*
 * 状態管理
 * バックエンドとの通信により値に変化があった場合に
 * リアクティブに反映するために格納
 * ※ローディングステータス
 * ''       -> 初期状態
 * 'get'    -> 読込状態（GET）
 * 'create' -> 作成状態（CREATE）
 */
export default {
  namespaced: true,
  state: {
    aiAnalysisLog: [], // AIによる画像判定結果のログ
    loadingStatus: '' // ローディング用
  },
  actions: {
    // AIanalysisLogを作成するために画像を送付
    createAIanalysisLog ({commit}, data) {
      return logapi.createAIanalysisLog(data)
        .then((d) => {
          console.log('createAIanalysisLog', d)
          commit('CREATE_LOG', JSON.parse(d.data))
        })
        .catch((e) => {
          console.error(e)
        })
    },
    // AIanalysisLogの取得
    getAIanalysisLog ({commit}, pk) {
      logapi.getAIAnalysisLog(pk)
        .then((d) => {
          console.log('getAIanalysisLog', d)
          commit('GET_LOG', d.data)
        })
        .catch((e) => {
          console.error(e)
        })
    },
    // AIanalysisLogの変更（念のため作成）
    // updateAIanalysisLog ({commit}, data) {
    //   return api.updateAIanalysisLog(data)
    //     .then((d) => {
    //       commit('UPDATE_LOG', d.data)
    //       return d.data
    //     })
    //     .catch((e) => {
    //       console.error(e)
    //       return
    //     })
    // },
    // AIanalysisLogの変更（念のため作成）
    // deleteAIanalysisLog ({commit}, pk) {
    //   api.deleteAIanalysisLog(pk)
    //     .then((d) => {
    //       commit('DELETE_LOG', pk)
    //     })
    //     .catch((e) => {
    //       console.error(e)
    //     })
    // },
  },
  mutations: {
    // 最新順にするため最初に格納
    CREATE_LOG (state, data) {
      state.aiAnalysisLog.unshift(data)
    },
    // GETで来たデータをそのまま格納
    GET_LOG (state, data) {
      state.aiAnalysisLog = data
    },
    // プライマリキーと合致しているものを変更（念のため作成）
    // UPDATE_LOG (state, data) {
    //   state.aiAnalyticsLog =
    //     state.aiAnalyticsLog.map((v) => v.pk == data.pk ? data : v)
    // },
    // プライマリキーと合致しているものを削除（念のため作成）
    // DELETE_LOG (state, pk) {
    //   state.aiAnalyticsLog =
    //     state.aiAnalyticsLog.filter((v) => v.pk !== pk)
    // },
  }
}