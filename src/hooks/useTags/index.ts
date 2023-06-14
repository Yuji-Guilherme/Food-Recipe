import { useNavigate } from 'react-router-dom';

const useTags = () => {
  const navigate = useNavigate();

  const handleNavigate = (category: string) => {
    return navigate(`/category/${category}`);
  };

  return {
    handleNavigate
  };
};

export { useTags };
