import HelloWorld from '@/components/HelloWorld'
import Famlys from '@/page/famlys'
import AboutPersonal from '@/page/aboutPersonal'
import MyTechnology from '@/page/technology'
import TecOne from '@/page/technology/TecOne'

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
            children:[{
                path: 'tecOne',
                component: TecOne,
    
            }]
        }
    ]

    export default routes;