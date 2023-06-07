import { useNavigate } from 'react-router-dom';

const useCategoriesCard = () => {
  const navigate = useNavigate();

  const handleClick = (category: string | undefined) => {
    return navigate(`/category/${category}`);
  };

  return {
    handleClick
  };
};

export { useCategoriesCard };
