import { useNavigate } from 'react-router-dom';

const useHandleNavigate = () => {
  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    return navigate(`${url}`);
  };

  return {
    handleNavigate
  };
};

export { useHandleNavigate };
