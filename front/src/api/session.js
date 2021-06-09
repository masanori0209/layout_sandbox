// Axiosの共通モジュール
import axios from 'axios'
const CSRF_COOKIE_NAME = 'csrftoken'
const CSRF_HEADER_NAME = 'X-CSRFToken'
const APPLICATION_JSON = 'application/json'
const session = axios.create({
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME,
  'Content-Type': APPLICATION_JSON
})
export default session
