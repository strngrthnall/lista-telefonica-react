import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyles from './styles'

import store from './store'
import Home from './pages/Home'
import NovoContato from './pages/NovoContato'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novoContato',
    element: <NovoContato />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div>
        <RouterProvider router={routes} />
      </div>
    </Provider>
  )
}

export default App
