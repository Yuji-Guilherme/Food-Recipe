import { useNavigate } from 'react-router-dom';

const useMealsCard = () => {
  const navigate = useNavigate();

  const handleClick = (id: string | undefined) => {
    return navigate(`/meal/${id}`);
  };

  return {
    handleClick
  };
};

export { useMealsCard };
