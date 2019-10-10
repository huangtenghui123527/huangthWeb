import $t from './tool.js'

export default{
    /**
     * 获取token
     * @param {String} key 
     */
    getToken(key){
        $t.getCookie(key)
    },
    /**
     * 设置token
     * @param {String} tokenKey 
     * @param {String} token 
     */
    setToken(tokenKey,token){
        $t.setCookie(tokenKey,token,7)
    },
    /**
     * 删除token
     * @param {String} tokenKey 
     */
    removeToken(tokenKey){
        $t.removeCookie(tokenKey)
    }
}