import './index.scss'

import TopHeader from './TopHeader/index'
import Footer from './Footer/index'
import LeftAside from './LeftAside/index'
import BackRoute from './BackRoute/index'

export default function BackLayOut() {
  return (
    <div className="container">
      <TopHeader title="后台"></TopHeader>
      <div className="contain">
        <LeftAside></LeftAside>
        <BackRoute></BackRoute>
      </div>
      {/* <Footer></Footer> */}
    </div>
  )
}
