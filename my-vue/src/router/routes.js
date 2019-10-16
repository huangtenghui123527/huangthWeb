import HelloWorld from '@/components/HelloWorld'
import Famlys from '@/page/famlys'

import AboutPersonal from '@/page/aboutPersonal'

import MyTechnology from '@/page/technology'
import Home from '@/page/technology/home'

    var routes= [
        {
            path: '/',
            name: 'AboutPersonal',
            component: AboutPersonal 
        },        
        {
            path: '/famlys',
            name: 'Famlys',
            component: Famlys
        },
        {
            path: '/myTechnology',
            name: 'MyTechnology',
            component: MyTechnology,
            redirect: '/myTechnology/home',
            children:[{
                path:'home',
                component:Home
            },{
                path: 'navLayout',
                component:()=>import("@/page/technology/navigates")
            },{
                path:"transtion",
                component:()=>import("@/page/technology/transtionAnimation/transtions")
            },{
                path:"rotat3d",
                component:()=>import("@/page/technology/transtionAnimation/rotat3d")
            },{
                path:"level3",
                component:()=>import("@/page/technology/aboutForm/level3")
            }]
        }
    ]

    export default routes;