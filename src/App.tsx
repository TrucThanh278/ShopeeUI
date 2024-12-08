import './App.css'
import './assets/scss/main.scss'
import useRouteElement from './useRouteElement'

function App() {
  const useRouteElements = useRouteElement()

  return <div>{useRouteElements}</div>
}

export default App
