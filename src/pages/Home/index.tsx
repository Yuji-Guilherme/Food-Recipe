import { Input } from '@/components/Input';
import { CardStackMeals } from '@/templates/CardStack';

import * as S from './style';

function Home() {
  return (
    <S.Main>
      <Input />
      <CardStackMeals />
    </S.Main>
  );
}

export { Home };
