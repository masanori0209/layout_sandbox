// AI analysis log API
// バックエンドにリクエスト送り、返り値をJSONでVuexに返却する
// UpdateとDeleteも念のため用意
import session from './session'
const uri = 'http://localhost:8000'
export default {
  createAIanalysisLog(data) {
    return session.post(uri + '/api/al/ai_analysis_log/create', data)
  },
  getAIAnalysisLog (id) {
    if (id) return session.get(uri + '/api/al/ai_analysis_log/' + id)
    else return session.get(uri + '/api/al/ai_analysis_log/')
  },
//   updateAIAnalysisLog (data) {
//     return session.patch(uri + '/api/al/ai_analysis_log/' + data.pk, data)
//   },
//   deleteAIAnalysisLog (id) {
//     return session.delete(uri + '/api/al/ai_analysis_log/' + id)
//   },
}