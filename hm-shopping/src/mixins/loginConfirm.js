export default {
  data () {
    return {

    }
  },
  methods: {
    loginConfirm () {
      // 判断token 是否存在，不存在弹确认框，存在则继续请求操作
      if (!this.$store.getters.token) {
        this.$dialog
          .confirm({
            title: '温馨提示',
            message: '此时需要先登录才能继续操作',
            confirmButtonText: '去登陆',
            cancelButtonText: '再逛逛'
          })
          .then(() => {
            // 希望跳转登录--登录后能跳回来，需要在跳转时携带参数（当前的路径）
            // this.$toute.fullPath(会包含查询参数)
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {})
        return true
      }
      return false
    }
  }
}
