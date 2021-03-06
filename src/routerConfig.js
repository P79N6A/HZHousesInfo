// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout'
import LibManagement from './pages/LibManagement'
import LibBorrow from './pages/LibBorrow'
import LibRecommend from './pages/LibRecommend'
import LibDonation from './pages/LibDonation'
import NotFound from './pages/NotFound'

const routerConfig = [
  {
    path: '/house',
    layout: BasicLayout,
    component: LibManagement
  },
  {
    path: '/house/recommand',
    layout: BasicLayout,
    component: LibBorrow
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound
  }
]

export default routerConfig
