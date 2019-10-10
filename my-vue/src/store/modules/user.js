import $t from '@/utils/tool'
import $auth from '@/utils/auth'
import { logout  } from '@/api'  // 导入用户信息相关接口

const user ={
    state:{
        name:'',
        avatar:'',
        token:$auth.getToken('Token'),
        roles:[],
        title:$t.getLocalStore('browserHeaderTitle')||'Admin'
    },
    getters:{
        token:state=>state.token,
        roles:state=>state.roles,
        avatar:state=>state.avatar,
        name:state=>state.name,
        title:state=>state.title
    },
    mutations:{
        SET_ROLES:(state,roles)=>{
            state.roles=roles;
        },
        SET_TITLE:(state,action)=>{
            state.title=action.title;
        },
        SET_NAME:(state,name)=>{
            state.name=name
        },
        SET_AVATAR:(state,avatar)=>{
            state.avatar=avatar;
        }
    },
    actions:{
        Logout({commit,reqData}){
            return new Promise((resolve,rej)=>{
                logout(reqData).then((response)=>{
                    commit('SET_ROLES',[])
                    removeToken('Token')
                    resolve()
                })
            })
        },
        changeRoles({commit},role){
            return new Promise(resolve=>{
                const token=role;
                setToken('Token',token,7);
                getUserInfo({'token':token}).then(res=>{
                    let data=res.data.userList;
                    commit('SET_ROLES',data.roles)
                    commit('SET_NAME',data.name)
                    commit('SET_AVATAR',data.avatar)
                    resolve();
                })
            })
        }
    }
}