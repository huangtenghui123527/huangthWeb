import HelloWorld from '@/components/HelloWorld'
import Famlys from '@/page/famlys'
import AboutPersonal from '@/page/aboutPersonal'
import MyTechnology from '@/page/technology'
import NavLayout from '@/page/technology/navigates'

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
            redirect: '/myTechnology/navLayout',
            children:[{
                path: 'navLayout',
                component: NavLayout,
    
            },{
                path:"transtion",
                component:()=>import("@/page/technology/transtions")
            }]
        }
    ]

    export default routes;