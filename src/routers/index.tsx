import HomeLayout from '../layout/index'
import Login from '../pages/login/index'
const { HashRouter, Route, Switch, Redirect } = require('react-router-dom')

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="contain">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/back" component={HomeLayout} />
            <Redirect to={'/login'} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  )
}

export default App
