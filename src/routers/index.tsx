import HomeLayout from '../layout/index'
import Login from '../pages/login/index'
const { BrowserRouter, Route, Switch, Redirect } = require('react-router-dom')

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="contain">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/back" component={HomeLayout} />
            <Redirect to={'/login'} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
