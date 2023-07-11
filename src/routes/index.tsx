import { Header } from '@/templates/Header';
import { NotFound } from '@/pages/NotFound';
import { Home } from '@/pages/Home';
import { Search } from '@/pages/Search';
import { Categories } from '@/pages/Categories';
import { MealsByCategory } from '@/pages/MealsByCategory';
import { Meal } from '@/pages/Meal';

import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/home',
        element: <Navigate to={'/'} />
      },
      {
        path: '/',
        element: <Navigate to={''} />
      }
    ]
  },
  {
    path: '/',
    element: <Header />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'home/',
        element: <Navigate to={'/'} />
      },
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'categories',
        element: <Categories />
      },
      {
        path: 'category',
        element: <Navigate to={'/categories'} />
      },
      {
        path: 'category/:mealCategory',
        element: <MealsByCategory />
      },
      {
        path: 'meal/:mealId',
        element: <Meal />
      }
    ]
  }
]);
export { router };
