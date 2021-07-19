import axios from 'axios'

import qs from 'qs'
let portUrl = "https://api.sugarchain.org/info";
export const getChainInfo = (callback) =>{
    let url = portUrl;
    axios.get(url).then(data => {

        callback && callback(data.data)
    })

}

// 发送登陆请求 SendLogin
// 请求头为：
// 返回体为： {
//             status:"OK" | "ERR" | ""       // 返回状态
//             err:"***"  | ""                // 返回错误信息
//         }
export const SendLogin = (EncryptedInfo,info,publicKey,callback) => {
    let url = "http://127.0.0.1:8890";
    axios.post(url,qs.stringify({
        EncryptedInfo:EncryptedInfo,
        info:info,
        publicKey:publicKey,
    })).then(data => {
        // console.log(data.dat)
        callback && callback(data.data)
    })
}
export default {
    getChainInfo,
}