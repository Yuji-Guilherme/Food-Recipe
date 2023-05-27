import GlobalStyle from './styles/GlobalStyle';
import { Card } from './components/Card';
import { IMeal } from './types/IMeal';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [meal, setMeal] = useState<IMeal[]>([
    {
      idMeal: '',
      strArea: '',
      strCategory: '',
      strIngredient1: '',
      strInstructions: '',
      strMeal: '',
      strMealThumb: '',
      strMeasure1: ''
    }
  ]);

  useEffect(() => {
    const http = axios.create({
      baseURL: 'https://www.themealdb.com/api/json/v1/1/'
    });
    http
      .get('/random.php')
      .then((r) => setMeal(r.data.meals))
      .catch((err) => console.log(err));

    // http.get('/categories.php').then((r) => console.log(r));
  }, []);

  return (
    <>
      <GlobalStyle />
      {meal.map((item) => (
        <Card {...item} key={item.idMeal} />
      ))}
    </>
  );
}

export default App;
