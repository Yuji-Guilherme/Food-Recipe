import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Categories } from '@/pages/Categories';
import { Home } from '@/pages/Home';
import { Header } from '@/templates/Header';
import { MealsByCategory } from '@/pages/MealsByCategory';
import { Meal } from '@/pages/Meal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
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
