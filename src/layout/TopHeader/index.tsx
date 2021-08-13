import { useHistory } from 'react-router-dom'

interface HeaderProps {
  title: string
  [propName: string]: any
}

function TopHeader(props: HeaderProps) {
  let history = useHistory()

  function handleClick(path: string) {
    history.push(path)
  }

  return (
    <header className="App-header">
      {props.title}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <ul>
        <li onClick={() => handleClick('/home')}>首页</li>
        <li>课程</li>
      </ul>
      <div>
        <Link to={{ pathname: '/login' }}>登录</Link>
      </div> */}
    </header>
  )
}

export default TopHeader
