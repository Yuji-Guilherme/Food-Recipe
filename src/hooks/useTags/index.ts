import { useNavigate } from 'react-router-dom';

const useTags = () => {
  const navigate = useNavigate();

  const handleNavigateTags = (category: string) => {
    return navigate(`/category/${category}`);
  };

  return {
    handleNavigateTags
  };
};

export { useTags };
