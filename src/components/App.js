import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/pages/Home'
import { AuthProvider } from '../Contexts/AuthContext'
import '../styles/App.css'
import Layout from './Layout'
import Login from './pages/Login'
import Quiz from './pages/Quiz'
import Result from './pages/Results'
import Signup from './pages/Signup'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/quiz' component={Quiz} />
            <Route exact path='/result' component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  )
}

export default App
