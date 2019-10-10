import $axios from '@/utils/axios'

const base_url='';

export function logout(params){return $axios({url:`${base_url}/user/logout`,method:'get',data:params})}

export function getUserList(params) {return $axios({url:`${base_url}/user/list`,method: 'get',data: params})}
  