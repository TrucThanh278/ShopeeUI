import './App.css'
import './assets/scss/main.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useRouteElement from './useRouteElement'

function App() {
  const useRouteElements = useRouteElement()

  return (
    <div>
      {useRouteElements}
      <ToastContainer />
    </div>
  )
}

export default App
