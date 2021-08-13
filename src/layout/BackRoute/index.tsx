import routers from '../../routers/route'

const { Switch, Route, Redirect } = require('react-router-dom')
function BackRoute() {
  return (
    <div className="main-contain">
      <Switch>
        {/* <Redirect exact from="/back" to={routers[0].path} /> */}
        {routers.map((ele, index) => {
          return (
            <Route key={index} path={ele.path} component={ele.component} />
          )
        })}
      </Switch>
    </div>
  )
}

export default BackRoute
