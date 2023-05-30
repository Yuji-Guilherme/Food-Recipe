import GlobalStyle from './styles/GlobalStyle';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { useMeals } from './store/meals';

function App() {
  const { meals } = useMeals();

  return (
    <>
      <GlobalStyle />
      <Input />
      {meals.map((item) => (
        <Card {...item} key={item.idMeal} />
      ))}
    </>
  );
}

export default App;
