import Home from '../pages/home/index'
import UserManage from '../pages/home/user-manage/index'

const routes = [
    {
        name: "首页",
        path: "/back/home",
        component: Home
    },
    {
        name: "用户管理",
        path: "/back/user-manage",
        component: UserManage
    }
]
export default routes