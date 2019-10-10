import Mock from 'mockjs'

import salesAPI from './sales'
import userAPI from './user'

Mock.mock(/\/sales\/get/, 'get', salesAPI.getSalesList)

Mock.mock(/\/user\/list/, 'get', userAPI.getUserList)
Mock.mock(/\/user\/logout/, 'get', userAPI.getLogout)

export default Mock