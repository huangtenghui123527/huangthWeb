import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'

export default{
    /**
     * 写入cookie
     * @param {String} name 
     * @param {String} value 
     * @param {Inter} time 
     */
    setCookie(name,value,time){
        let val=JSON.stringify(value)
        Cookies.set(name, val, { expires: time });
    },
    /**
     * 读取cookie
     * @param {String}name 
     */
    getCookie(name){
        if(!name) return;
        let val =Cookies.get(name)
       return val;
    },
    /**
     * 删除cookie
     * @param {String} name 
     */
    removeCookie(name){
        Cookies.remove(name)
    },
    /**
     * 存储localstore
     * @param {String} name 
     * @param {*} content 
     */
    setLocalStore(name,content){
        if(!name) return;
        if(typeof content !== 'string'){
            content.JSON.stringify(content);
        }
        window.localStorage.setItem(name,content);
    },
    /**
     * 读取store
     * @param {String} name 
     */
    getLocalStore(name){
        if(!name) return;
        let val=window.localStorage.getItem(name);
        if(val!==null){
            try{
                val=JSON.parse(val);
            }catch(e){
                val=val;
            }
        }
        return val;
    },
    /**
     * 删除store
     * @param {String} name 
     */
    removeLocalStorage(name){
        if(!name) return;
        window.localStorage.removeItem(name)   
    },
    /**
     * DES加密 Pkcs7填充方式  
     * @param {String} message 
     * @param {String} key 
     */
    encryptByDES(message, key){  
        const keyHex = CryptoJS.enc.Utf8.parse(key);  
        const encrypted = CryptoJS.DES.encrypt(message, keyHex, {  
            mode: CryptoJS.mode.ECB,  
            padding: CryptoJS.pad.Pkcs7  
        });  
        return encrypted.toString();  
    }  ,

    /**
     * DES解密
     * @param {String} ciphertext 
     * @param {String} key 
     */
    decryptByDES(ciphertext, key){  
        const keyHex = CryptoJS.enc.Utf8.parse(key);  
        // direct decrypt ciphertext  
        const decrypted = CryptoJS.DES.decrypt({  
                    ciphertext: CryptoJS.enc.Base64.parse(ciphertext)  
        }, keyHex, {  
                    mode: CryptoJS.mode.ECB,  
                    padding: CryptoJS.pad.Pkcs7  
        });  
        return decrypted.toString(CryptoJS.enc.Utf8);  
    } 
}