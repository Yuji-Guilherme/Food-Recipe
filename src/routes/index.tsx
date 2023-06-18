import { Header } from '@/templates/Header';
import { NotFound } from '@/pages/NotFound';
import { Home } from '@/pages/Home';
import { Categories } from '@/pages/Categories';
import { MealsByCategory } from '@/pages/MealsByCategory';
import { Meal } from '@/pages/Meal';

import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'home',
        element: <Navigate to={'/'} />
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
