import * as S from './style';
import { Input } from '@/components/Input';
import { CardStackMeals } from '@/templates/CardStack';

function Home() {
  return (
    <S.Main>
      <Input />
      <CardStackMeals />
    </S.Main>
  );
}

export { Home };
