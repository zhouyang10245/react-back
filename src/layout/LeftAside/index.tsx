import routers from '../../routers/route'
import { NavLink } from 'react-router-dom'

interface RouteFace {
  path: string
  name: string
  chidldren?: Array<RouteFace>
}
function ChildItem(props: RouteFace) {
  return (
    <NavLink to={props.path} activeClassName="active-item">
      {props.name}
    </NavLink>
  )
}

function ParentItem(props: { name: string; chidldren: Array<RouteFace> }) {
  return (
    <div>
      <p>{props.name}</p>
      {props.chidldren.map((ele, index) => {
        return (
          <div className="child-item" key={index}>
            <ChildItem {...ele}></ChildItem>
          </div>
        )
      })}
    </div>
  )
}

export default function LeftAside() {
  return (
    <ul className="aside-contain">
      {routers.map((ele: RouteFace, index) => {
        if (ele.chidldren && ele.chidldren.length > 0) {
          return (
            <li className="parent-items" key={index}>
              <ParentItem
                name={ele.name}
                chidldren={ele.chidldren}
              ></ParentItem>
            </li>
          )
        } else {
          return (
            <li className="parent-items" key={index}>
              <ChildItem {...ele}></ChildItem>
            </li>
          )
        }
      })}
    </ul>
  )
}
