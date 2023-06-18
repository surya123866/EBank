import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import Home from './component/Home'
import NotFound from './component/NotFound'
import ProtectedRoute from './component/ProtectedRoute'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/ebank/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)
export default App
