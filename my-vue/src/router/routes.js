import HelloWorld from '@/components/HelloWorld'
import Famlys from '@/page/famlys'
import MyTechnology from '@/page/technology'
import TecOne from '@/page/technology/TecOne'


    var routes= [
        {
            path: '/',
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