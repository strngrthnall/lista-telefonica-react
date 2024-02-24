import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyles, { Container } from './styles'

import store from './store'
import Home from './pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
