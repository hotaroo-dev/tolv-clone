import { createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import Index from './routes'
import Products from './routes/products'
import Product from './routes/product'
import Stockists from './routes/stockists'
import About from './routes/about'
import FormLayout from './routes/formLayout'
import Login from './routes/login'
import Signup from './routes/signup'
import SearchedProducts from './routes/search'
import ErrorPage from './routes/error-page'
import User from './routes/user'
import UserForm from './routes/userForm'
import Users from './routes/users'
import AdminLayout from './routes/adminLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:productId',
        element: <Product />
      },
      {
        path: 'stockists',
        element: <Stockists />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'search',
        element: <SearchedProducts />
      },
      {
        path: '/users',
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Users />
          },
          {
            path: ':userId',
            element: <UserForm />
          },
          {
            path: 'new',
            element: <UserForm />
          }
        ]
      },
      {
        path: 'account',
        element: <User />
      }
    ]
  },
  {
    path: '/',
    element: <FormLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      }
    ]
  }
])

export default router
